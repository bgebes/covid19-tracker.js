import Title from './components/Title/Title';
import StatsCards from './components/StatsCards/StatsCards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import BarChart from './components/BarChart/BarChart';
import { runGetStats } from './actions/actions';
import 'bootstrap';
import './App.css';

function App() {
  runGetStats();

  return (
    <div className="container mt-5">
      <Title />
      <StatsCards />
      <CountryPicker />
      <BarChart />
      <div className="text-center my-1">
        Made by <a href="https://github.com/bgebes">bgebes</a>
      </div>
    </div>
  );
}

export default App;
