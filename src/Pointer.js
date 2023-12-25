import "./Pointer.css";
import {forwardRef} from 'react';
const Pointer = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="pointer-body"><div className="head-pointer"></div><div className={`pointer ${props.className}`}></div></div>
    );
});

export default Pointer;