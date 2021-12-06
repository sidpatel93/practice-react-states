import './App.css';
import { useState } from 'react';
import AngryButton from './components/AngryButton'
import CounterButton from './components/CounterButton'
import LightSwitchButton from './components/LightSwitchButton'
import TextRepeaterButton from './components/TextReapeaterButton'

function App() {
  const [light, setLight] = useState('off');
  const isDark = light==='off' ? 'dark' : '';
  const lightSwitch = () => {
    light === "on" ? setLight("off") : setLight("on")
  };
  return (
    <div className={`App ${isDark}`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton light={light} lightSwitch={lightSwitch} />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
