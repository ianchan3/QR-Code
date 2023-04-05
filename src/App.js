import './App.css';
import QRCode from "./assets/image-qr-code.png"

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className='App-image'>
          <img id="QR-Code" src={QRCode} />
          <h1>Improve your front-end skills by building projects</h1>
          <h2>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
