import React, { useEffect} from 'react';
import { useSelector,useDispatch,connect } from 'react-redux';

const BallFunctions =(props)=>{

        /*const widthTile = useSelector(state => state.playground.widthTile);
        const leftTile = useSelector(state => state.playground.tileLeft);
        const rightTile = useSelector(state => state.playground.tileRight);
        const midTile = useSelector(state => state.conditions.midTile);

        const widthOpponent = useSelector(state => state.playground.widthOpponent);
        const leftOpponent = useSelector(state => state.playground.leftOpponent);
        const bottomOpponent = useSelector(state => state.playground.bottomOpponent);
        const rightOpponent = useSelector(state => state.playground.rightOpponent);*/

        const heightPlayground = useSelector(state => state.playground.heightPlayground);
        const down = useSelector(state => state.conditions.down);
        const up = useSelector(state => state.conditions.up);
        const midField = useSelector(state => state.conditions.midField);

        const fourthPartTile = useSelector(state => state.conditions.fourthPartTile);
        const thirdPartTile = useSelector(state => state.conditions.thirdPartTile);
        const bounceRight = useSelector(state => state.conditions.bounceRight);
        const bounceLeft = useSelector(state => state.conditions.bounceLeft);
        
        const ballLeftPositionGlobal = useSelector(state => state.conditions.ballLeftPosition);
        const ballTopPosition = useSelector(state => state.conditions.ballTopPosition);
        const ballLeftPosition = useSelector(state => state.conditions.ballLeft);
        const ballRightPosition = useSelector(state => state.conditions.ballRight); 
        const ballBottomPosition = useSelector(state => state.conditions.ballBottom); 
        const ballHeight = useSelector(state => state.conditions.ballHeight); 

        const goalHomeColor = useSelector(state => state.ekstraklasa.goalColorHome);
        const goalAwayColor = useSelector(state => state.ekstraklasa.goalColorAway);        
        const awayScore = useSelector(state => state.ekstraklasa.awayScore);
        const homeScore = useSelector(state => state.ekstraklasa.homeScore);

        let interval = null;
        let goalHomeTime = null;
        let goalAwayTime = null;
        
        const dispatch = useDispatch();

    const firstDataBall =()=>{
        dispatch({
            type:'FIRST_BALL_DATA',
            left:50,
            top:30
        });
    };

    useEffect(()=>{
        firstDataBall();
    },[]);

    const start =()=>{
        dispatch({type:'UP_DOWN',up:false,down:false,midField:true})
    }

    useEffect(()=>{
        start()
    },[])
    
    const directionBallGoalkeeper =()=>{

        const oneFifth = props.widthTile * 0.20;
        const oneFifthTile = props.leftTile + oneFifth;
        const twoFifth = props.widthTile * 0.40;
        const twoFifthTile = props.leftTile + twoFifth;
        const threeFifth = props.widthTile * 0.60;
        const threeFifthTile = props.leftTile + threeFifth;
        const fourthFifth = props.widthTile * 0.80;
        const fourthFifthTile = props.leftTile + fourthFifth;
        const tileOffsetRight = props.widthTile + props.leftTile;

        const bottomCondition = ballBottomPosition >= props.tileTop;
        
        if(bottomCondition && ballLeftPosition > twoFifthTile && ballLeftPosition < threeFifthTile){
            dispatch({type:'BALL_MID_UP'})
        }else if(bottomCondition && ((ballRightPosition >= props.leftTile && ballRightPosition < oneFifthTile) || (ballLeftPosition >= props.leftTile && ballLeftPosition < oneFifthTile))){
            dispatch({type:'BALL_FIRST_LEFT'})
        }else if(bottomCondition && ballLeftPosition >= oneFifthTile && ballLeftPosition < twoFifthTile){
            dispatch({type:'BALL_SECOND_LEFT'})
        }else if(bottomCondition && ballLeftPosition >= threeFifthTile && ballLeftPosition < fourthFifthTile){
            dispatch({type:'BALL_THIRD_RIGHT'})
        }else if(bottomCondition && ballLeftPosition >= fourthFifthTile && ballLeftPosition <= tileOffsetRight){
            dispatch({type:'BALL_FOURTH_RIGHT'})
        }else if(ballLeftPositionGlobal <= 0){
            dispatch({type:'BOUNCE_RIGHT'})
        }else if(ballLeftPositionGlobal >= 95){
            dispatch({type:'BOUNCE_LEFT'})
        }
    };
    
    const directionBallOpponent =()=>{

        const oneFifth = props.widthOpponent * 0.20;
        const oneFifthTile = props.leftOpponent + oneFifth;
        const twoFifth = props.widthOpponent * 0.40;
        const twoFifthTile = props.leftOpponent + twoFifth;
        const threeFifth = props.widthOpponent * 0.60;
        const threeFifthTile = props.leftOpponent + threeFifth;
        const fourthFifth = props.widthOpponent * 0.80;
        const fourthFifthTile = props.leftOpponent + fourthFifth;
        const tileOffsetRight = props.widthOpponent + props.leftOpponent;

        const topCondition = ballTopPosition <= props.bottomOpponent;

        if(topCondition && ballLeftPosition > twoFifthTile && ballLeftPosition < threeFifthTile){
            dispatch({type:'BALL_MID_DOWN'})
        }else if(topCondition && ((ballRightPosition >= props.leftOpponent && ballRightPosition < oneFifthTile) || (ballLeftPosition >= props.leftOpponent && ballLeftPosition < oneFifthTile))){
            dispatch({type:'BALL_FIRST_LEFT'})
        }else if(topCondition && ballLeftPosition >= oneFifthTile && ballLeftPosition < twoFifthTile){
            dispatch({type:'BALL_SECOND_LEFT'})
        }else if(topCondition && ballLeftPosition >= threeFifthTile && ballLeftPosition < fourthFifthTile){
            dispatch({type:'BALL_THIRD_RIGHT'})
        }else if(topCondition && ballLeftPosition >= fourthFifthTile && ballLeftPosition <= tileOffsetRight){
            dispatch({type:'BALL_FOURTH_RIGHT'})
        }else if(ballLeftPositionGlobal <= 0){
            dispatch({type:'BOUNCE_RIGHT'})
        }else if(ballLeftPositionGlobal >= 95){
            dispatch({type:'BOUNCE_LEFT'})
        }
    };

    const upDown =()=>{

        if(((ballRightPosition >= props.leftOpponent && ballRightPosition <= props.rightOpponent) || (ballLeftPosition >= props.leftOpponent  && ballLeftPosition <= props.rightOpponent)) && ballTopPosition <= props.bottomOpponent){
            dispatch({type:'UP_DOWN',up:false,down:true,midField:false})
        }
        if(((ballRightPosition >= props.leftTile && ballRightPosition <= props.rightTile) || (ballLeftPosition >= props.leftTile  && ballLeftPosition <= props.rightTile)) && ballBottomPosition >= props.tileTop){
            dispatch({type:'UP_DOWN',up:true,down:false,midField:false})
        }
    };

    const ResetPositionBall =()=>{

        const ballBottomOffset = ballTopPosition + ballHeight;

        if((ballRightPosition < props.leftOpponent || ballLeftPosition > props.rightOpponent) && ballBottomOffset <= 0){
            
            clearInterval(interval);
            
            dispatch({type:'GOAL_COLOR',isGoalHome:true,isGoalAway:false});
            dispatch({type:'UP_DOWN',up:false,down:true,midField:false});
            dispatch({type:'HOME_SCORE'});
            
            goalHomeTime = setTimeout(()=>{
                dispatch({type:'RESET_BALL',top:30,left:50});
            },2000);
          
        }else if((ballRightPosition < props.leftTile || ballLeftPosition > props.rightTile) && ballTopPosition >= heightPlayground){
            clearInterval(interval)
            
            dispatch({type:'GOAL_COLOR',isGoalHome:false,isGoalAway:true});
            dispatch({type:'UP_DOWN',up:true,down:false,midField:false});
            dispatch({type:'AWAY_SCORE'});
            
            goalAwayTime = setTimeout(()=>{
                dispatch({type:'RESET_BALL',top:props.tileTop,left:50});
            },2000);

        }else{
            dispatch({type:'GOAL_COLOR',isGoalHome:false,isGoalAway:false})
            clearTimeout(goalAwayTime);
            clearTimeout(goalHomeTime);
        }
    };
  
    useEffect(()=>{
        ResetPositionBall();
    },[ballTopPosition]);

    useEffect(()=>{
        upDown();
    });

    useEffect(()=>{
        directionBallOpponent();
    });
    
    useEffect(()=>{
        directionBallGoalkeeper(); 
    });

    const dependencies =()=>{

        //down
        if(midField === true){
            dispatch({type:'BALL_MOVE_DOWN'});
        }

        if(down === true){
            dispatch({type:'BALL_MOVE_DOWN'})
            if(props.midTile === true){
                dispatch({type:'MOVE_BALL_TO_LEFT',left:0})
            }
            if(props.firstPartTile === true){
                dispatch({type:'MOVE_BALL_TO_LEFT',left:-5})
            }
            if(props.secondPartTile === true){
                dispatch({type:'MOVE_BALL_TO_LEFT',left:2.5})
            }
            if(thirdPartTile === true){
                dispatch({type:'MOVE_BALL_TO_LEFT',left:-2.5})
            }
            if(fourthPartTile === true){
                dispatch({type:'MOVE_BALL_TO_LEFT',left:-5})
            }
            if(bounceRight === true){
                dispatch({type:'MOVE_BALL_TO_LEFT',left:5})
            }
            if(bounceLeft === true){
                dispatch({type:'MOVE_BALL_TO_LEFT',left:-5})
            }
        }

        //up
        if(up === true){
            dispatch({type:'BALL_MOVE_TOP'})
            if(props.midTile === true){
                dispatch({type:'MOVE_BALL_TO_LEFT',left:0})
            }
            if(props.firstPartTile){
                dispatch({type:'MOVE_BALL_TO_LEFT',left:-5})
            }
            if(props.secondPartTile === true){
                dispatch({type:'MOVE_BALL_TO_LEFT',left:2.5})
            }
            if(thirdPartTile === true){
                dispatch({type:'MOVE_BALL_TO_LEFT',left:-2.5})
            }
            if(fourthPartTile === true){
                dispatch({type:'MOVE_BALL_TO_LEFT',left:5})
            }
            if(bounceRight === true){
                dispatch({type:'MOVE_BALL_TO_LEFT',left:5})
            }
            if(bounceLeft === true){
                dispatch({type:'MOVE_BALL_TO_LEFT',left:-5})
            }
        }
    };

    useEffect(()=>{
        if((goalHomeColor === false && goalAwayColor === false) && (homeScore <= 20  || awayScore <= 20)){
            interval = setInterval(()=>{dependencies()},30); 
            return ()=> clearInterval(interval);
        }
    });

    useEffect(()=>{
        if(homeScore === 20  || awayScore === 20){
            clearInterval(interval);
        }
    });
    
    return ( 
        <>
           {/*<button onClick={dependencies} style={{height:'60px'}}>MOVE</button>*/}
           {/*<button onClick={start} style={{height:'60px'}}>Start</button>*/}
        </>
     );
}

const mapStateToProps = state =>{
    return{
        midTile: state.conditions.midTile,
        firstPartTile: state.conditions.firstPartTile,
        secondPartTile: state.conditions.secondPartTile,
        fourthPartTile: state.conditions.fourthPartTile,
        thirdPartTile: state.conditions.thirdPartTile,
        tileTop: state.playground.tileTop,
        widthTile: state.playground.widthTile,
        leftTile: state.playground.tileLeft,
        rightTile: state.playground.tileRight,
        widthOpponent: state.playground.widthOpponent,
        leftOpponent: state.playground.leftOpponent,
        bottomOpponent: state.playground.bottomOpponent,
        rightOpponent: state.playground.rightOpponent
    }
};

 
export default connect(mapStateToProps,{})(BallFunctions);