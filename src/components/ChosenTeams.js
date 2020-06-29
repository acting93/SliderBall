import React from 'react';
import Team from '../subcomponents/Team';

const ChoosenState = (props) => {
    const {value} = props;

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
                {team}
            </section>
        </>
     );
}
 
export default ChoosenState;