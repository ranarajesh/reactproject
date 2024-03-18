import logo from './logo.svg';
import './App.css';
import Hello from './functional/Hello';
import HelloClass from './class/HelloClass';
import ClassStateComponent from './class/ClassStateCompoent';
import CryptoListComp from './functional/CryptoLIst';
import StringRefComp from './class/StringRefComp';
import GifPortal from  './GifPortal'
import Counter from './functional/Counter';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React !!!
        </a>
        <Hello name="HelloFuncComponent"/>
        <HelloClass name="HelloFuncComponent"/>
        <ClassStateComponent counter={12}></ClassStateComponent>
        <CryptoListComp/>
        <StringRefComp/>

      </header>

       <GifPortal gifPath="https://ed-4576056463327232.educative.run:3000/imgs/portal.gif"/>
       <Counter/>
    </div>
  );
}

export default App;
