import React,{useEffect,useMemo,useState} from 'react';
import {useDispatch,useSelector,connect} from 'react-redux';
import '../styles/playground.css';
import Goalkeeper from '../subcomponents/Goalkeeper';
import Opponent from '../subcomponents/Opponent';
import BallFunctions from '../subcomponents/BallFunctions';
import Score from '../subcomponents/Score';
import Ball from '../subcomponents/Ball';
import FinalScore from '../subcomponents/FinalScore';
import MovingMobile from '../subcomponents/MovingMobile';

const Playground = (props) => {

    const playground = React.createRef();
    const dispatch = useDispatch();
    const ballLeftPositionGlobal = useSelector(state => state.conditions.ballLeftPosition);
    const ballTopPosition = useSelector(state => state.conditions.ballTopPosition);

    const [final,setFinal] = useState(false);
    const [width,setWidth] = useState(false)
    
    const homeScore = useMemo(()=>{
        return props.homeScore
    },[props.homeScore]);

    const awayScore = useMemo(()=>{
        return props.awayScore
    },[props.awayScore]);

    useEffect(()=>{
            const right = playground.current.getBoundingClientRect().right;
            const left = playground.current.getBoundingClientRect().left;
            const top = playground.current.getBoundingClientRect().top;
            const height = playground.current.offsetHeight;
            const bottom = playground.current.offsetTop + height;

            dispatch({type:'PLAYGROUND_DATA',right:right,left:left,top:top,bottom:bottom,height:height});
    },[]);

    const left = useMemo(()=>{
        return ballLeftPositionGlobal
    },[ballLeftPositionGlobal]);

    const top = useMemo(()=>{
        return ballTopPosition
    },[ballTopPosition]);

    const finalScore =()=>{
        if(props.homeScore === 20|| props.awayScore === 20 ){
            setFinal(true);
        }
    };
    
    useEffect(()=>{
        finalScore();
    });

    useEffect(()=>{
        const ballStart = setTimeout(()=>{
            dispatch({type:'BALL_START'})
        },3000);
        return ()=> clearTimeout(ballStart);
    },[]);


    const mobileArrows = useMemo(()=>{
        const widthWindow = window.innerWidth;
        if(widthWindow <= 576){
            setWidth(true)
        }else{
            setWidth(false) 
        }
    },[width]) 

    return ( 
        <>
                <section className='playground-section'>
                        <Score homeScore={homeScore} awayScore={awayScore}  />
                        <div className='goal-away' style={props.isGoalHome === true ? {background:"green"} : null}><p style={props.isGoalHome ? {display:"block"} : {display:"none"}}>GOL</p></div>
                        <div className='playground' ref={playground}>
                            {final === true ? <FinalScore homeScore={homeScore} awayScore={awayScore}/> : null}
                            <Ball left={left} top={top}/> 
                            {props.ballStart === true ? <BallFunctions /> : null}
                            <Opponent />
                            <Goalkeeper />
                        </div>
                        <div className='goal-home' style={props.isGoalAway=== true ? {background:"green"} : null}><p style={props.isGoalAway ? {display:"block"} : {display:"none"}}>GOL</p></div>
                        {width === true ? <MovingMobile /> : null}    
                </section>
        </>
     );
}

const mapStateToProps = state =>{
    return{
        awayScore: state.ekstraklasa.awayScore,
        homeScore: state.ekstraklasa.homeScore,
        isGoalHome: state.ekstraklasa.goalColorHome,
        isGoalAway: state.ekstraklasa.goalColorAway,
        ballStart: state.conditions.ballStart
    }
};
 
export default connect(mapStateToProps,{})(Playground);

