import "./Clock.css";
import Pointer from './Pointer.js';
import { useRef, useEffect } from "react";
import "./Pointer.css";

export default function Clock (){
    const refSeconds = useRef(null);
    const refMinutes = useRef(null);
    const refHours = useRef(null);
    let numbers = new Array();
    
    for (let i = 0; i < 12; i++)
        numbers.push(useRef(null));  
        
    function handleSeconds(){
        refSeconds.current.style.transform = `translate(0rem,-7rem) rotate(${new Date().getSeconds() * 6}deg)`;
    }

    function handleMinutes(){
        refMinutes.current.style.transform = `translate(0rem, -6rem) rotate(${new Date().getMinutes() * 6}deg)`; //translate(${Math.sin(new Date().getMinutes() *6 * Math.PI / 180)*5.25}rem, ${Math.cos(new Date().getMinutes() * 6 * Math.PI / 180)*5.25}rem)
    }

    function handleHours(){
        refHours.current.style.transform = `translate(0rem, -4rem) rotate(${new Date().getHours() * 30}deg)`;
    }


    useEffect(() => {
        const secondsInterval = setInterval(handleSeconds, 1000);
        const minutesInterval = setInterval(handleMinutes, 1000);
        const hoursInterval = setInterval(handleHours, 1000);
    
        // Limpar os intervalos quando o componente é desmontado
        return () => {
          clearInterval(secondsInterval);
          clearInterval(minutesInterval);
          clearInterval(hoursInterval);
        };
      }, []); // O array de dependências vazio assegura que o useEffect só é executado uma vez, equivalente ao componentDidMount

      useEffect(() => {
        for(let i = 0; i < 12; i++) {
            numbers[i].current.style.transform = `translate(${Math.sin(Math.PI*30*(17-i)/180)*12}rem, ${Math.cos(Math.PI*30*(17-i)/180)*12}rem)`;
        }
      }, []);
    
    return (
        <div className="extern-clock">
            <div className="intern-clock">
                <Pointer ref={refSeconds} className="pointer-seconds" />
                <Pointer ref={refMinutes} className="pointer-minutes" />
                <Pointer ref={refHours} className="pointer-hours" />
                <div className="tampa"></div>
                {Array.from(Array(12).keys()).map((number, index)=>{return <div key={index} ref={numbers[index]} className="number-clock">{number+1}</div>})}
            </div>
        </div>
    );
}