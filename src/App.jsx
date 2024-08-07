import "./App.css";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import History from "./components/History";
import IncomeExpanse from "./components/IncomeExpanse";
import NewTransection from "./components/NewTransection";

function App() {
  return (
    <div className="container">
      <Header />
      <Balance />
      <IncomeExpanse />
      <History />
      <NewTransection />
    </div>
  );
}

export default App;
