import React, { useRef,useEffect } from 'react';
import {useDispatch} from 'react-redux';
import '../styles/playground.css';


const Ball = (props) => {

    const {left,top} = props;

    const ball = useRef();
    const dispatch = useDispatch();

//ball moving

    const uploadData =()=>{
        const leftBall = ball.current.getBoundingClientRect().left;
        const rightBall = ball.current.getBoundingClientRect().right;
        const topBallOffset = ball.current.offsetTop;
        const leftBallOffset = ball.current.offsetleft;
        const heightBall = ball.current.offsetHeight;
        const bottomBall = topBallOffset + heightBall;

        dispatch({type:'BALL_STATS',
            left:leftBall,
            right:rightBall,
            top:topBallOffset,
            bottom:bottomBall,
            height:heightBall,
            topOffset: topBallOffset,
            leftOffset: leftBallOffset
        });
    };

    useEffect(()=>{
        uploadData();
    });

    return ( 
        <>
            <div className='ball' ref={ball} style={{left:`${left}%`,top:`${top}px`}}></div>
        </>
     );
};
 
export default React.memo(Ball);