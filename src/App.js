import logo from './images/logo.svg';
import illustration from './images/illustration-mockups.svg';
import desktopbackground from './images/bg-desktop.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <>
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <main>
            <img src={illustration} className="illustration" alt="illustration"/>
            {/* <img src={desktopbackground} className="desktopbackground" alt=""/> */}
            <div className="content">
              <h2>Build The Community Your Fans Will Love</h2>
              <p> Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
              <button>Register</button>
            </div>
        </main>
        
        <footer>
            <div>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
            </div>
        </footer>
          
      </>
    </div>
  );
}

export default App;
