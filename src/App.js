import logo from './logo.svg';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor='userId'>inputbox1</label>
        <input type='text'  placeholder='Enter username'   id='userId'/>
       <img  src='https://images.opencollective.com/katalon_studio/ff84f07/logo.png'  alt='img1' title='Image Logo'/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
      <Home></Home>
      </header>
    </div>
  );
}

export default App;
