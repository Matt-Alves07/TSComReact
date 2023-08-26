import React from 'react';
import './App.css';

//Components
import FirstComponent from './Components/FirstComponent';
import SecondComponent from './Components/SecondComponent';
import Destructuring from './Components/Destructuring';
import State from './Components/State';

function App() {
  //Variaveis
  const name: string = "John Doe";
  const age: number = 30;
  const isWorking: boolean = true;

  //Funcoes
  const userGreeting = (name: string): string => {
    return `Hey, ${name}! How r u doing?`;
  }

  return (
    <div className="App">
      <h1>Typescript with React</h1>
      <h2>
        My name is: {name}, I'm {age} years old, and {isWorking ? "I'm currently working" : "I'm not currently working"}
      </h2>
      <h3>{userGreeting(name)}</h3>

      <FirstComponent/>
      <SecondComponent name="Test"/>
      <Destructuring
        title="First post"
        content="Some content"
        commentsQty={10}
        tags={["ts","react","first-project","example"]}
      />
      <State/>
    </div>
  );
}

export default App;
