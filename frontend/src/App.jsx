import Navbar from './component/navbar';
import Fotter from './component/fotter';
import "./css/app.css"
import Approute from './route/route';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Approute/>
      </main>
      <Fotter />
    </div>
  );
}

export default App;