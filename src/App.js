import './App.css';

function App() {

  return (
    <div className="App">

      <div className="container">

        <div className="generator">

          <header className="generator__header">
            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/locked-with-key_1f510.png" alt="lock icon" className="generator__icon" />
            <h1 className="generator__title">Strong Password Generator</h1>
          </header>


          <div className="generator__passwd">password_placeholder<button className="copy-btn"><i className="copy-btn__icon las la-clipboard"></i></button></div>

          <div className="form-group">
            <label htmlFor="passwd-length">Password Length</label> <input type="number" name="passwd-length" id="passwd-length" min="8" max="64" defaultValue="8"/>
          </div>

          <div className="form-group">
            <label htmlFor="uppercase-letters">
              <input type="checkbox" name="uppercase-letters" id="uppercase-letters" defaultChecked={true} /> Uppercase letters (A-Z)</label>
          </div>

          <div className="form-group">
            <label htmlFor="lowercase-letters">
              <input type="checkbox" name="lowercase-letters" id="lowercase-letters" defaultChecked={true} /> Lowercase letters (a-z)</label>
          </div>

          <div className="form-group">
            <label htmlFor="numbers">
              <input type="checkbox" name="numbers" id="numbers" defaultChecked={true} /> Numbers (0-9)</label>
          </div>
        
          <div className="form-group">
            <label htmlFor="symbols">
              <input type="checkbox" name="symbols" id="symbols"  defaultChecked={true}/> Symbols (!@#$%&amp;&#123;[())]&#125;+=_)</label>
          </div>

          <button className="generator__btn">GENERATE</button>

        </div>

        <footer>
          <a href="http://github.com" target="_blank" rel="GitHub"> <i className="lab la-github-alt"></i> Source</a>
        </footer>

      </div>    
        
    </div>
  );
}

export default App;
