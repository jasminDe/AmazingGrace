import './App.css';
import User from './User';


function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <h1>AMAZING GRACE MOBILE TRANSPORT</h1>
      <h3>We're Simply Amazing</h3>
      {/* navigation (passanger/Driver/Dispatcher) */}
      <User title='Passanger'/>
      <User title='Driver'/>
      <User title='Dispatcher'/>
      {/* About Us */}
      {/* footer (contact us/Join our team) */}
    </div>
  );
}

export default App;
