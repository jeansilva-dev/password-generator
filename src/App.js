import React,{useState} from 'react';
import Toast from 'light-toast';

import './App.css';

function App() {

  const [password, setPassword] = useState("12345");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const handleGeneratePassword = () => {
    let characteList = "";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%&^*-_=+{?>|})[(]";
  
    if(includeLowercase){
      characteList += lowercase;
    }

    if(includeUppercase){
      characteList += uppercase;
    }

    if(includeNumbers){
      characteList += numbers;
    }

    if(includeSymbols){
      characteList += symbols;
    }

    if(passwordLength < 8 || passwordLength > 64){
      alert("Password length must be between 8 and 64 characteres!");
      return;
    }

    if(characteList.length == 0){
      alert("Select at least one option of characteres!");
      return;
    }

    setPassword(createPassword(characteList));
  }

  const createPassword = (characteList) => {
    let passwd = "";
    let characterLength = characteList.length;

    for(let i=0; i<passwordLength; i++){
      let characterIndex = Math.round(Math.random() * characterLength);  

      passwd += characteList.charAt(characterIndex);
    }
    return passwd;
  }

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
    Toast.success("Password copied to clipboard!", 1000);
  }

  return (
    <div className="App">

      <div className="container">

        <div className="generator">

          <header className="generator__header">
            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/locked-with-key_1f510.png" alt="lock icon" className="generator__icon" />
            <h1 className="generator__title">Strong Password Generator</h1>
          </header>

          <div className="generator__password" onClick={handleCopyPassword}>
            <input 
              type="text" 
              className="generator__password-value" 
              value={password} 
              readOnly={true}
              />
              <button className="copy-btn">
                <i className="copy-btn__icon las la-clipboard"></i>
              </button>
          </div>

          <div className="form-group">
            <label htmlFor="password-length">Password Length: </label>
            <input 
              type="number" 
              name="password-length" 
              id="password-length" 
              min="8" max="64" 
              defaultValue={passwordLength} 
              onChange={(e) => setPasswordLength(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lowercase-letters">
              <input 
                type="checkbox" 
                name="lowercase-letters" 
                id="lowercase-letters" 
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
              
              /> Lowercase letters (a-z)
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="uppercase-letters">
              <input 
                type="checkbox" 
                name="uppercase-letters" 
                id="uppercase-letters" 
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
              
              /> Uppercase letters (A-Z)
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="numbers">
              <input 
                type="checkbox" 
                name="numbers" 
                id="numbers" 
                checked={includeNumbers} 
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                /> Numbers (0-9)</label>
          </div>
        
          <div className="form-group">
            <label htmlFor="symbols">
              <input 
                type="checkbox" 
                name="symbols" 
                id="symbols"  
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                /> Symbols (!@#$%&amp;&#123;[())]&#125;+=_)</label>
          </div>

          <button className="generator__btn" onClick={handleGeneratePassword}>
            GENERATE
          </button>

        </div>

        <footer>
          <a href="https://github.com/jeansilva-dev/password-generator" target="_blank" rel="GitHub"> <i className="lab la-github-alt"></i> Source code</a>

          <div className="vercel-logo">
            <div>Hosted by:</div>
            <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer"><img src="static/vercel-logotype-light.png" alt="Vercel logo" /></a>
          </div>
        </footer>

      </div>    
        
    </div>
  );
}

export default App;
