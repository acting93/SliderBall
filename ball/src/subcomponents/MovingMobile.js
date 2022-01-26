import React from 'react';
import '../styles/homepage.css';
import {useDispatch} from 'react-redux';

const MovingMobile = () => {

    const dispatch = useDispatch();

    const moveRight =()=>{
        dispatch({type:'MOVE_RIGHT'});
    };

    const moveLeft =()=>{
        dispatch({type:'MOVE_LEFT'});
    };
    console.log("reessss")

    return ( 
        <>
            <div className='mobile'>
                <button onClick={moveLeft} className='mobile-array'><i className='fa fa-arrow-left'></i></button>
                <button onClick={moveRight} className='mobile-array'><i className='fa fa-arrow-right'></i></button>
            </div>
        </>
     );
}
 
export default MovingMobile;