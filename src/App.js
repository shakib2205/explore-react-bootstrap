import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import GridCard from './component/GridCard/GridCard';
import NavBar from './component/Nav/Nav';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
     <Button variant='danger'>My Button</Button>
     <Spinner animation="grow" variant="danger" ></Spinner>
     <GridCard></GridCard>
    </div>
  );
}

export default App;
