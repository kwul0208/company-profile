import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './components/ourService/Navbar';
import OurServices from './pages/OurServices';

function App() {
  return (
    <>
      <Router >
        <Navbar />
        <Switch>
          <Route path='/' exact component={OurServices} />
          <Route path='/' exact component={OurServices} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
