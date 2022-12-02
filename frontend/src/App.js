import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Change from "./component/Change";
import Profile from "./component/Profile";

function App() {
  return (
    <div className="App">
        <Profile/>
      <Change/>
    </div>
  );
}

export default App;
