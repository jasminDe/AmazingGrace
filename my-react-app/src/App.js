import './App.css';
import User from './components/User';
import PersonIcon from '@mui/icons-material/Person';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import discriptions from './discriptions';


function App() {
  return (
    <div className="App">

              {/* HEADER */}
      <div className='header'>
      <div className='sub_header'>
        <img src="images/AGMT_Logo.png" alt="logo" />
        <h1>AMAZING GRACE MOBILE TRANSPORT</h1>
      </div>
        <h3>We're Simply Amazing</h3> 
      </div>

              {/* NAVIGATION BAR */}
      
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
      <div className='about us'>
         <div>
            <h3>Staff</h3>
            <img src="images/coWorkers.jpg" alt="coWorkers" />
            <div>
              {discriptions.team}
            </div>
         </div>

         <div>
           <h3>Clients</h3>
            <img src="images/happyPeople.jpg" alt="coWorkers" />
            <div>
              {discriptions.client}
            </div>
         </div>

         <div>
           <h3>Vehicles</h3>
           <img src="images/picOfb42.jpeg" alt="coWorkers" />
           <div>
              {discriptions.vehicle}
            </div>
         </div>
      </div>
      {/* footer (contact us/Join our team) */}
    </div>
  );
}

export default App;
