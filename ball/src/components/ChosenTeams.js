import React, { useEffect,useState } from 'react';
import Team from '../subcomponents/Team';
import {useSelector} from 'react-redux';
import AnimationTeam from '../subcomponents/AnimationTeam';
import Logo from '../arrays/EkstraklasaArray.json'

const ChoosenState = (props) => {
    const {value} = props;
    //const teams = useSelector(state=> state.ekstraklasa.ekstraklasa);
    const choosenTeams = useSelector(state=> state.ekstraklasa.teams);

    const [loadTeams,setLoadTeams] = useState(JSON.parse(JSON.stringify(Logo.ekstraklasa)));
      /*let activeTeam = value.filter(item =>{
        if(item.active === true){
            return item
        }
    })

    let falseTeam = value.filter(item =>{
        if(item.active === false){
            return item
        }
    })*/

    let team = value.map(item => <Team key={item.id} id={item.id} team={item.team} img={item.img} active={item.active}/>)
    
    return ( 
        <>
            <section className='chosen-teams'>
                {choosenTeams.length > 0 ? null : <AnimationTeam value={loadTeams}/>} 
                {team}
            </section>
        </>
     );
}
 
export default ChoosenState;