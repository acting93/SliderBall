import React from 'react';
import {useSelector} from 'react-redux';
import '../styles/playground.css';


const FinalScore = (props) => {

    const teamFirst = useSelector(state => state.ekstraklasa.teams[0].img);
    const teamSecond = useSelector(state => state.ekstraklasa.teams[1].img);

    const {homeScore,awayScore} = props;
    
    
    return ( 
        <>
            <div className='final-score'>
                <div className='final-score-content' style={homeScore > awayScore ? {display:'block'} : {display:'none'}}>
                    <p>You Won</p>
                    <img src={require(`../image-ekstraklasa/${teamFirst }.png`).default} alt='logoFirst'/>
                </div>
                <div className='final-score-content' style={homeScore < awayScore ? {display:'block'} : {display:'none'}}>
                    <p>You Lost</p>
                    <img src={require(`../image-ekstraklasa/${teamSecond }.png`).default} alt='logoSecond'/>
                </div>
                <a href={"acting93.github.io/SliderBall/"}><button onClick>Zagraj jeszcze raz</button></a>
            </div>
        </>
     );
};

export default FinalScore;