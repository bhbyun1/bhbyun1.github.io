// import logo from './logo.svg';
import logo from '../Assets/logo192.png'
import pfp from '../Assets/pfp.png'
import '../App.css';
import { HashRouter } from 'react-router-dom';
// import * as ReactDOM from 'react-dom';
// import {
//   useNavigate
// } from 'react-dom';

// function jumpTo(path) {
//   let navigate = useNavigate();
//   const routeChange = () => {
//     navigate(path);
//   }
// }

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        Hello! Welcome to my website.
      </header>
      <header className='App-body'>
        <div className='App-text'>
          <img src={pfp} className='App-logo' alt="logo" />
          <p className='App-text2'>
            Hey! My name is aaa. This is a website I made during my free time to learn how to code.
          </p>
          {/* <button href="/pages/Projects.js">
            Go to projects
          </button> */}

        </div>

      </header>
    </div>
  )
  // a
  // // return (
  // //   <div className="App">
  // //     <header className="App-header">
  // //       <img src={logo} className="App-logo" alt="logo" />
  // //       <p>
  // //         Edit <code>src/App.js</code> and save to reload.
  // //       </p>
  // //       <a
  // //         className="App-link"
  // //         href="https://reactjs.org"
  // //         target="_blank"
  // //         rel="noopener noreferrer"
  // //       >
  // //         Learn React
  // //       </a>
  // //     </header>
  // //   </div>
  // // );
}

export default App;
