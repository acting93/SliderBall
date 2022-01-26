import React,{useEffect} from 'react';
import '../styles/chosenteams.css';
import { useDispatch} from 'react-redux';

const Team = (props) => {
    const {id,team,img,active} = props;
    const dispatch = useDispatch()

    useEffect(()=>{
        if(active === false){
            dispatch({type:'DELETE_TEAM',paylaod:id});
        }
    },[active]);
    
    return ( 
        <>
            <div className='team-picked'><img src={require(`../image-ekstraklasa/${img}.png`).default} alt='logo'/><p>{team}</p></div>
        </>
     );
};
 
export default Team;