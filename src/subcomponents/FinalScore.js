import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import '../styles/playground.css';


const FinalScore = (props) => {

    const teamFirst = useSelector(state => state.ekstraklasa.teams[0].img);
    const teamSecond = useSelector(state => state.ekstraklasa.teams[1].img);

    const {homeScore,awayScore} = props;
    const dispatch = useDispatch();
    
    
    return ( 
        <>
            <div className='final-score'>
                <div className='final-score-content' style={homeScore > awayScore ? {display:'block'} : {display:'none'}}>
                    <p>You Won</p>
                    <img src={require(`../image-ekstraklasa/${teamFirst }.png`)} alt='logoFirst'/>
                </div>
                <div className='final-score-content' style={homeScore < awayScore ? {display:'block'} : {display:'none'}}>
                    <p>You Lost</p>
                    <img src={require(`../image-ekstraklasa/${teamSecond }.png`)} alt='logoSecond'/>
                </div>
                <button onClick={()=>{dispatch({type:'RETURN_HOMEPAGE'})}}>Zagraj jeszcze raz</button>
            </div>
        </>
     );
};
 
export default FinalScore;