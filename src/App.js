import './App.css';
//import any components you may need here
import Header from './features/Header/Header.js';
import Posts from './features/Posts/Posts.js';
import Side from './features/Side/Side.js';
import Footer from './features/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Posts />
      </main>
      <aside>
        <Side />  
      </aside>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default App;
