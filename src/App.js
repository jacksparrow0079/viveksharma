import logo from './logo.svg';
import './App.css';

import Dashboard from './components/dashboard';
import {Header} from './components/header';
import Node from './components/Node';
import Nesting from './components/nesting';

function App() {
  return (
    <>
      <Header/>
     <Dashboard name="ABC"/>
     <Nesting/>
     <Node/>
    </>
  );
}

export default App