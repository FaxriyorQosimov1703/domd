import React,{useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
// uuidv4(); 
// import {useWindowScroll} from 'react-use'

function UpArrow() {
    // const {y: pageYOffset} = useWindowScroll();
    // const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth'})
    return (
        <div className="up-arrow" >
            <img src="../../../img/up-arrow1.png" alt=""/>
        </div>
    )
}

export default UpArrow
