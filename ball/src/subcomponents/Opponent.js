import React,{useEffect, useRef, useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import '../styles/playground.css';

const Opponent = () => {

    let interval = null;
    const moveOpponent = useSelector(state => state.playground.moveOpponent);
    const ballTopPosition = useSelector(state => state.conditions.ballTopPosition);

    const awayScore = useSelector(state => state.ekstraklasa.awayScore);
    const homeScore = useSelector(state => state.ekstraklasa.homeScore);

    const dispatch = useDispatch();
    const opponent = useRef();
    

    const [right,setRight] = useState(false);
    const [left,setLeft] = useState(false);
    const [width,setWidth] = useState(false);

    const firstDataOpponent =()=> {
        const widthOpponent = opponent.current.offsetWidth;
        const leftOpponent = opponent.current.getBoundingClientRect().left;
        const bottomOpponent = opponent.current.offsetTop + opponent.current.offsetHeight;
        const rightOpponent = opponent.current.getBoundingClientRect().right;
        dispatch({type:'OPPONENT_FIRST_DATA',width:widthOpponent,left:leftOpponent,bottom:bottomOpponent,right:rightOpponent});
    };

    useEffect(()=>{
        firstDataOpponent();
    },[ballTopPosition]);

    const autoMoving =()=>{
        if(width === false){
            if(moveOpponent <= 5){
                setRight(true);
                setLeft(false);
            }
            if(moveOpponent >= 70){
                setRight(false);
                setLeft(true);
            }
        }
        if(width === true){
            if(moveOpponent <= 10){
                setRight(true);
                setLeft(false);
            }
            if(moveOpponent >= 60){
                setRight(false);
                setLeft(true);
            }
        }
    };

    useEffect(()=>{
        autoMoving();
    });

    const movingOpponentAuto =()=>{
        if(right === true){
            dispatch({type:'OPPONENT_RIGHT'});
        }
        if(left === true){
            dispatch({type:'OPPONENT_LEFT'});
        }
    };

    useEffect(()=>{
        interval = setInterval(()=>{movingOpponentAuto()},30);
        return ()=> clearInterval(interval);
    });

    const autoWidth =()=>{
        const differenceScore = homeScore - awayScore;
        if(differenceScore > 2){
            setWidth(true);
        }
    };

    useEffect(()=>{
        autoWidth();
    });

    useEffect(()=>{
        if(homeScore === 20  || awayScore === 20){
            clearInterval(interval);
        }
    });

    return ( 
        <>
            <div className='opponent'
                style={{
                    left:`${moveOpponent}%`,
                    width: width === true ? '35%' : '25%'
                }}
                ref={opponent}
                >
                <div className='keep'></div>
                <div className='keep'></div>
                <div className='keep'></div>
                <div className='keep'></div>
                <div className='keep'></div>
            </div>
        </>
     );
};
 
export default Opponent;

