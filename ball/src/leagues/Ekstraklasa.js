import React from 'react';
import EkstraklasaTeams from '../subcomponents/EkstraklasaTeams';

const Ekstraklasa = (props) => {
    const {value} = props

    const mapEkstraklasa = value.map(item => <EkstraklasaTeams key={item.id} id={item.id} team={item.team} img={item.img} active={item.active} />);

    return ( 
        <>
            {mapEkstraklasa}
        </>
     );
}
 
 
export default Ekstraklasa;