import React,{useMemo} from 'react';
import {connect} from 'react-redux';
import '../styles/playground.css';
import Club from './Club';

const Score = (props) => {

    const {homeScore,awayScore} = props;

    const team = useMemo(()=>{
       return props.teams.map(item => <Club key={item.id} team={item.team} img={item.img} />)
    },[props.teams]); 

    return ( 
        <>
            <div className='score-table'>
                {team}
                <div className='result-container'>
                    <p className='result'>{homeScore}</p>
                </div>  
                <div className='result-container'>            
                    <p className='result'>{awayScore}</p>
                </div>  
            </div>  
        </>
     );
};

const mapStateToProps = state =>{
    return{
        teams: state.ekstraklasa.teams
    }
};
 
export default React.memo(connect(mapStateToProps,{})(Score));