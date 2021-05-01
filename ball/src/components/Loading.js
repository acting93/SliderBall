import React, { useState, useEffect } from 'react';
import '../styles/loading.css';

const Loading = () => {

    const [color,isColor] = useState(false);
    let interval = null;

    useEffect(()=>{
        if(color === false){
            interval = setTimeout(()=>{isColor(true)},1000);
        }
        if(color === true){
            interval = setTimeout(()=>{isColor(false)},1000);
        }
        return ()=>clearTimeout(interval);
    });

    return ( 
        <>
            <div className='loading'>
                <p>USE LEFT AND RIGHT ARROW TO MOVE YOUR TILE ON PC:</p>
                <div className='single-square'>
                    <div className='arrow'><i className='fas fa-arrow-up'></i></div>
                </div>
                <div className='single-square'>
                    <div className='arrow' style={color ? {background:"green"}: null}><i className='fas fa-arrow-left'></i></div>
                    <div className='arrow'><i className='fas fa-arrow-down'></i></div>
                    <div className='arrow' style={color ? {background:"green"}: null}><i className='fas fa-arrow-right'></i></div>
                </div>
                
                <div className='single-square'>
                    <p>ON MOBILE DEVICE:</p>
                    <div className='arrow' style={color ? {background:"green"}: null}><i className='fas fa-arrow-left'></i></div>
                    <div className='arrow' style={color ? {background:"green"}: null}><i className='fas fa-arrow-right'></i></div>
                </div>
            </div>
        </>
     );
}
 
export default Loading;