import { useRef } from "react";

function useDebounce(cb, delay) {
    const timerId = useRef();
    
    return function(...args) {
        if(timerId.current) {
            clearTimeout(timerId.current);
        }
        timerId.current = setTimeout(() => {
            cb(...args);
        }, delay);
    };
}

export default useDebounce;
