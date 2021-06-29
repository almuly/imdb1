import './App.css';
import Globalcontext from './context/Globalcontext';
import Header from "./views/Header";
import Home from "./views/Home";

function App() {
    return (
      <Globalcontext.Provider>
        <div className="App">
            <Header/>
            <Home/>
        </div>
        </Globalcontext.Provider>
    );
}
export default App;
