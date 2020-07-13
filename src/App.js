import React,{Component} from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  render() { 
    return ( 
      <>
            <div className = 'container-fluid'>
              <div className = 'root'>
                <header>{<Header />}</header>
                <main>{<Main />}</main>
                <footer>{<Footer />}</footer>
              </div>
            </div>
      </>
     );
  }
}
 
export default App;
