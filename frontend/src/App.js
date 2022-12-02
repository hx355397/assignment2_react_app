import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Change from "./component/Change";
import Profile from "./component/Profile";
import History from "./component/History";

function App() {
  return (
    <div className="App">
        <Profile/>
        <Change/>
        <History/>
    </div>
  );
}

export default App;
