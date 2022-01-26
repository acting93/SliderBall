import React,{useEffect, useState} from 'react';

const AnimationTeam = (props) => {
    const {value} = props;
    const [teamLogo,setteamLogo] = useState(value[0].img);
    const [newClass,setNewClass] = useState(false);
    let intervals = null;
    let interval = null;

//random logo 
    const randomTeam =()=>{
        const randomTeam = Math.floor(Math.random(value)*value.length);
        setteamLogo(value[randomTeam].img);
        setNewClass(true)
    };

    useEffect(()=>{
        if(newClass === false){
            interval = setInterval(() => {
                randomTeam() 
            }, 2000);
        }
        return ()=> clearInterval(interval)

    });

    useEffect(()=>{
        if(newClass === true){
            intervals = setInterval(()=>{setNewClass(false)},2000)
        }
        if(newClass === false){
            intervals = setInterval(()=>{setNewClass(true)},3000);
        }
        return ()=> clearInterval(intervals);
    });

    return ( 
        <>
            <div className='random-photo'>
                <img src={require(`../image-ekstraklasa/${teamLogo}.png`).default} className={newClass === true ? 'animation-logo' : null} alt=''/>
            </div>
        </>
     );
};
 
export default AnimationTeam;