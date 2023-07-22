import { useState, useEffect, useRef } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import { Sub } from './types'; 

interface AppState {
  subs: Array<Sub>;
  newSubsNumber: number;
}

function App() {

  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('http://localhost:3001/subs')
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub]) 
    setNewSubsNumber(n => n + 1) 
  }
  
  return (
    <div className="App" ref={divRef}>
      <h1>Midu subs</h1>
      <List subs={subs} />
      New subs: {newSubsNumber}
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
