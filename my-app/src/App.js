import './App.css';
import User from './User';
import PersonIcon from '@mui/icons-material/Person';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import HeadphonesIcon from '@mui/icons-material/Headphones';


function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>AMAZING GRACE MOBILE TRANSPORT</h1>
        <h3>We're Simply Amazing</h3>
      </div>
      
      <div className='navigationBar'>
        <div className='user'>
          <PersonIcon />
          <User title='Passanger'/>
        </div>

        <div className='user'>
          <DriveEtaIcon />
          <User title='Driver'/>
        </div>

        <div className='user'>
          <HeadphonesIcon />
          <User title='Dispatcher'/>
        </div>
      </div>
      {/* About Us */}
      {/* footer (contact us/Join our team) */}
    </div>
  );
}

export default App;
