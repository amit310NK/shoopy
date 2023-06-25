
import './App.css';
import { Activity } from './Component/activity';
import {ReactComponent as Logo} from "./images/logo.svg"
import {ReactComponent as Bell} from "./images/bell.svg"
import {ReactComponent as Setting} from "./images/setting.svg"



function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='container'>
          <div className='navbar-menu'>
            <div className='logo'>
                 <Logo/>
            </div> 
            <div className='menu-items'>
              <ul className='list' >
                <li>Home</li>
                <li>Finances</li>
                <li>Send and Request</li>
                <li>Deals</li>
                <li>Wallet</li>
                <li>Activity</li>
                <li>Help</li>
                
              </ul>
            </div>
          </div> 
          <div className='navbar-options'>
          <div className='menu-items'>
              <ul className='list-2' style={{width:"75%"}} >
                <li><Bell/></li>
                <li><Setting/></li>
                <li>LOG OUT</li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Activity/>
    </div>
  );
}

export default App;
