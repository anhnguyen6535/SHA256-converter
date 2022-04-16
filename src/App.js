import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [biHash, setBiHash] = useState("")
  const [hexHash, setHexHash] = useState("")
  const refInput = useRef()

  const clickHandler = (e) => {
    e.preventDefault();
    const text = refInput.current.value
    if(text != ""){

      var SHA256 = require("crypto-js/sha256");
      var hexToBinary = require('hex-to-binary');
  
      var hashString = SHA256(text).toString()
      setHexHash(hashString)
  
      var binaryHash = hexToBinary(hashString)
  
      setBiHash(binaryHash)   
    }
  }

  return (
    <div className='hero'>
      <div className='container'>
        <div className='input'>
          <h3 className='title'>Type your input below</h3>
          <form onSubmit={clickHandler}>
            <input type="text" className="textInput" ref={refInput}/>
            <input type="submit" className="convert" value="SHA256 Encrypt" onClick={clickHandler} onMouseDown={e => e.preventDefault()}/>
          </form>
        </div>

        <div className='output'>
          <div className='hashOutput'>
            <h3 className='title'>Hexadecimal hash</h3>
            <p className='hex-hash'>{hexHash}</p>
          </div>

          <div className='hashOutput'>
            <h3 className='title'>Binary hash</h3>
            <p className='bi-hash'>{biHash}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
