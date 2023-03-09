import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from '../src/components/sidebar/Sidebar'
import DealCreation from "./components/DealCreation/DealCreation";

function App() {
  return (
    <div>
      <div>
        <Header />
        <Sidebar/>
        <DealCreation/>
      </div>
    </div>
  );
}

export default App;
