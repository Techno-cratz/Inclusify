import './App.css';
import FileUpload from './components/InputBox/FileUpload';
import { FinalInput } from './components/InputBox/FinalInput';
import Home from './pages/Home';
import InputDashboard from './pages/InputDashboard';
import Signin from './pages/Signin';
import { Router, Route, Switch } from 'react-router-dom';

function App() {
  return (

    <>
    <Router>
    <main>
            <Switch>
                <Route path="/" component={Signin} exact />
                <Route path="/input" component={InputDashboard} />
                {/* <Route path="/shop" component={Shop} /> */}
                <Route component={Error} />
            </Switch>
        </main>
    </Router>
        {/* <Home /> */}
        {/* <Signin /> */}
        {/* <InputDashboard /> */}
        {/* <FinalInput /> */}
        {/* <FileUpload /> */}
       
    </>
  );
}

export default App;
