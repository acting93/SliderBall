import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import '../styles/chosenteams.css';

const EkstraklasaTeams = (props) => {
    const {id,team,img,active} = props;
    const dispatch = useDispatch();
    const chosenTeams = useSelector(state => state.ekstraklasa.teams);

    const pickTeam=()=>{
        dispatch({type:'TEAMS',payload:id});
    };

    useEffect(()=>{
        dispatch({type:'ADD_TEAM',payload:id});
    },[active]);

    return ( 
        <>
            <div className='team-div' onClick={chosenTeams.length < 2 ? pickTeam : null}>
                <div className='logo' style={active === true ? {background:'silver'} : null}>
                    <img src={require(`../image-ekstraklasa/${img}.png`)} alt='logoteam'/>
                </div>
                <p>{team}</p>
            </div>
        </>
     );
};

export default EkstraklasaTeams;