import './App.css';
import User from './User';
import PersonIcon from '@mui/icons-material/Person';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import HeadphonesIcon from '@mui/icons-material/Headphones';


function App() {
  return (
    <div className="App">
      <div className='header'>
      <div className='sub_header'>
        <img src="AGMT_Logo.png" alt="logo" />
        <h1>AMAZING GRACE MOBILE TRANSPORT</h1>
      </div>
        <h3>We're Simply Amazing</h3> 
      </div>

      <div className='navigationBar'>
        <div className='user'>
          <button>
          <PersonIcon />
          <User title='Passanger'/>
          </button>
        </div>

        <div className='user'>
        <button>
          <DriveEtaIcon />
          <User title='Driver'/>
          </button>
        </div>

        <div className='user'>
        <button>
          <HeadphonesIcon />
          <User title='Dispatcher'/>
          </button>
        </div>
      </div>
      {/* About Us */}
      {/* footer (contact us/Join our team) */}
    </div>
  );
}

export default App;
