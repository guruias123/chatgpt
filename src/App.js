
import './App.css';
import Home from './components/Home';
import Main from './components/Main';
import { Icon } from '@iconify/react';

function App() {
  return (
    <div>
      <Home />
      <div className='icon-back'>
      <Icon className='icon1' icon="bi:chat-square" hFlip={true} />
      </div>
      {/* <Main /> */}
    </div>
  );
}

export default App;
