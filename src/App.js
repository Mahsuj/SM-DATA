import "./App.css";
import NavigationDesktop from "./components/NavigationDesktop";
import logo from "./assets/logo.png";
import navLinksData from "./data.json";

function App() {
  return (
    <div className='App'>
      <div className='header-parent'>
        <header className='header'>
          <a href='#' className='logo-anchor'>
            <img className='logo' src={logo} alt='logo' />
          </a>
          <NavigationDesktop navLinksData={navLinksData} />
        </header>
      </div>
      <body>
        <main className='main-content'>
          <h1 className='heading'>Pages Have to Be Built As Per Options </h1>
        </main>
      </body>
    </div>
  );
}

export default App;
