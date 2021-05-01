import React from 'react';

const Club = (props) => {

    const {team,img} = props;
    
    return ( 
        <>
            <div className='team-match'>
                <img src={require(`../image-ekstraklasa/${img}.png`)} alt='logo'/>
                <p>{team}</p>
            </div>
        </>
     );
}
 
export default Club;