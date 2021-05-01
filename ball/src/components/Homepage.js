import React,{Component} from 'react';
import {connect} from 'react-redux';
import '../styles/homepage.css';
import Ekstraklasa from '../leagues/Ekstraklasa';
import FirstLeague from '../leagues/FirstLeague';
import SecondLeague from '../leagues/SecondLeague';
import ChosenTeams from './ChosenTeams.js';
import * as actionCreator from '../actions/actions';


class Homepage extends Component {
    constructor(props){
        super(props)
        this.state ={
            ekstraklasa:false,
            firstLeague:false,
            secondLeague:false
        }
    }

    render(){
        const {ekstraklasa,firstLeague,secondLeague} = this.state;
        return ( 
            <>
                <ChosenTeams value={this.props.chosenTeam} />
                <div className='homepage col-12'>
                    <section className='league-content col-12'>
                        <section className='col-12 col-lg-4 section-leagues'>
                            <div className='section-header'>
                                {this.props.chosenTeam.length < 1 ? <p>Wybierz swój zespół</p> : <p>Wybierz przeciwnika</p>}
                            </div>
                            <div className='section-container'>
                                <ul>
                                    <li
                                        name='ekstraklasa'
                                        value={this.state.ekstraklasa}
                                        onClick={()=>{this.setState({ekstraklasa:!ekstraklasa,firstLeague:false,secondLeague:false});this.props.ekstraklasa()}}>
                                            <p>EKSTRAKLASA</p>
                                    </li>
                                    <li
                                        name='firstLeague'
                                        value={this.state.firstLeague}
                                        onClick={()=>{this.setState({firstLeague:!firstLeague,ekstraklasa:false,secondLeague:false})}}>
                                            <p>1 LIGA</p>
                                        </li>
                                    <li
                                        name='secondLeague'
                                        value={this.state.secondLeague}
                                        onClick={()=>{this.setState({secondLeague:!secondLeague,ekstraklasa:false,firstLeague:false})}}>
                                            <p>2 LIGA</p>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section className='col-12 col-lg-8 section-team'>
                            {(ekstraklasa || firstLeague || secondLeague) === false ?<article className='description'> 
                                <p>
                                    Kochasz piłkę nożną, a w szczególności najlepszą ligę na Świecie czyli Ekstraklap..., Ekstraklasę ? Ja tak. Jesteś w metrze ? W pracy ? W autobusie ? Żona na zakupach a Ty czkasz w aucie ?
                                    Aplikacja to nie Fifa, Pro Evolution Soccer a jedynie slider podobny do kultowej gry Arkanoid. Zagraj swoim klubem przeciwko Twojemu największemu wrogowi.
                                </p>
                            </article> : null}
                            {ekstraklasa === true ? <Ekstraklasa value={this.props.ekstraklasaTeams}/> : null}
                            {firstLeague === true ? <FirstLeague /> : null}
                            {secondLeague === true ? <SecondLeague /> : null}
                        </section>
                    </section>
                    <section className='col-12 button-play'>
                            <button style={this.props.chosenTeam.length === 2 ? {background:"green"} : {background:"silver",color:"white"}}
                            onClick={this.props.chosenTeam.length === 2 ? ()=> this.props.playground() : null}>Play</button>
                    </section>
                </div>
            </>
        );
    }
}

const mapStateToProps =(state)=>{
    return{
        ekstraklasaTeams:state.ekstraklasa.ekstraklasa,
        chosenTeam:state.ekstraklasa.teams
    }
};

const mapDispatchToProps =(dispatch)=>{
    return{
        ekstraklasa: ()=> dispatch({type:'EKSTRAKLASA_ACTION'}),
        playground:  ()=> dispatch(actionCreator.LoadingMiddleware())
    }
};
 
export default connect(mapStateToProps,mapDispatchToProps)(Homepage);