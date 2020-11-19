import { useState } from 'react';
import './App.css';
import JSONDynamicComponent from './JSONDynamicComponent';
import JSONInputComponent from './JSONInputComponent';

function App() {
  const [jsonValue, setJsonValue] = useState('[]')

  return (
    <div className="App">
        <JSONInputComponent 
          setJsonValue={setJsonValue}  
        />
        <JSONDynamicComponent 
          jsonValue={jsonValue}
        />
    </div>
  );
}

export default App;
