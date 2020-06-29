import React,{useEffect} from 'react';
import '../styles/playground.css';
import {useSelector,useDispatch} from 'react-redux';

const Goalkeeper = () => {
    const goalkeeper = React.createRef();
    const move = useSelector(state => state.playground.move);
    const ballTopPosition = useSelector(state => state.conditions.ballTopPosition);
    const dispatch = useDispatch();

    const firstDataGoalkeeper =()=>{
        const positionTop = goalkeeper.current.offsetTop;
        const tileWidth = goalkeeper.current.offsetWidth;
        const offsetLeft = goalkeeper.current.getBoundingClientRect().left;
        const offsetRight = goalkeeper.current.getBoundingClientRect().right;
        dispatch({type:'GOALKEEPER',top:positionTop,width:tileWidth,left:offsetLeft,right:offsetRight});
    };

    useEffect(()=>{
       firstDataGoalkeeper();
    },[ballTopPosition]);

    useEffect(()=>{
        document.onkeydown =(e)=>{
            if(e.keyCode === 39){
                dispatch({type:'MOVE_RIGHT'});
            }else if(e.keyCode === 37){
                dispatch({type:'MOVE_LEFT'});
            }
        };
    },[move]);
        
    return ( 
        <>
            <div className='goalKeeper' ref={goalkeeper} style={{left:`${move}%`}}>
                <div className='keep'></div>
                <div className='keep'></div>
                <div className='keep'></div>
                <div className='keep'></div>
                <div className='keep'></div>
            </div>
        </>
     );
};
 
export default Goalkeeper;