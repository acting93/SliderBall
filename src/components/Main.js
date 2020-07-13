import React, { useEffect } from 'react';
import Homepage from './Homepage';
import Playground from './Playground';
import '../styles/main.css';
import Loading from '../components/Loading';
import {useSelector,useDispatch} from 'react-redux';

const Main = () => {
    const active = useSelector(state => state.playground.isActive);
    const isPlaygroundActive = useSelector(state => state.playground.isPlaygroundActive);

    return ( 
        <>
            <main className='col-12 main'>
                    {isPlaygroundActive === false && active === false ? <Homepage/> : null}
                    {isPlaygroundActive === true ? <Playground/> : null}
                    {active === true ? <Loading /> : null}
            </main>
        </>
     );
}
 
export default React.memo(Main);