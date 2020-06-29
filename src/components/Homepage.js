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

        this.hideSection = this.hideSection.bind(this);
    }

    hideSection(){
        this.setState({
            ekstraklasa:false,
            firstLeague:false,
            secondLeague:false
        })
    };

    render(){
        const {ekstraklasa,firstLeague,secondLeague} = this.state;
        return ( 
            <>
                <ChosenTeams value={this.props.chosenTeam} />
                <div className='homepage col-12'>
                    <section className='col-12 col-lg-4 section-leagues'>
                        <div className='section-header'>
                            {this.props.chosenTeam.length < 1 ? <p>Wybierz swój zespół</p> : <p>Wybierz przeciwnika</p>}
                        </div>
                        <div className='section-container'>
                            <ul>
                                <li
                                    name='ekstraklasa'
                                    value={this.state.ekstraklasa}
                                    onClick={()=>{this.setState({ekstraklasa:true,firstLeague:false,secondLeague:false});this.props.ekstraklasa()}}>
                                        <p>EKSTRAKLASA</p>
                                </li>
                                <li
                                    name='firstLeague'
                                    value={this.state.firstLeague}
                                    onClick={()=>{this.setState({firstLeague:true,ekstraklasa:false,secondLeague:false})}}>
                                        <p>1 LIGA</p>
                                    </li>
                                <li
                                    name='secondLeague'
                                    value={this.state.secondLeague}
                                    onClick={()=>{this.setState({secondLeague:true,ekstraklasa:false,firstLeague:false})}}>
                                        <p>2 LIGA</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className='button-close' style={ekstraklasa || firstLeague || secondLeague === true ? {display:"block"} : {display:"none"}}>
                        <button className='btn-close' onClick={this.hideSection}><span></span><span></span></button>
                    </section>
                    <section className='col-12 col-lg-8 section-team'>
                        {ekstraklasa === true ? <Ekstraklasa value={this.props.ekstraklasaTeams}/> : null}
                        {firstLeague === true ? <FirstLeague /> : null}
                        {secondLeague === true ? <SecondLeague /> : null}
                    </section>
                </div>
                <section className='col-12 button-play'>
                        <button style={this.props.chosenTeam.length === 2 ? {background:"green"} : {background:"silver",color:"white"}}
                        onClick={this.props.chosenTeam.length === 2 ? ()=> this.props.playground() : null}>Play</button>
                </section>
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