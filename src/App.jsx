import Title from './components/Title/Title';
import StatsCards from './components/StatsCards/StatsCards';
import { runGetStats } from './actions/actions';
import 'bootstrap';
import './App.css';

function App() {
  runGetStats();

  return (
    <div className="container mt-5">
      <Title />
      <StatsCards />
    </div>
  );
}

export default App;
