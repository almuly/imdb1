import './App.css';
import {GlobalProvider} from './context/GlobalContext'
import Header from "./views/Header";
import Home from "./views/Home";

function App() {
    return (
      <GlobalProvider>
        <div className="App">
            <Header/>
            <Home/>
        </div>
        </GlobalProvider>
    );
}
export default App;
