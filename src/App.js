import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Navbar';
import { HigleySchoolDistrictEnrollmentPredictions, Component1, Component2 } from './ui-components';

function App() {
  return (
    <>
      <Navbar />
      <HigleySchoolDistrictEnrollmentPredictions width='100%'/>
      <Component1/>
    </>

  );
}

export default App;
