import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import GetStudent from './Pages/GetStudent';
import Error404 from './Pages/Error404';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/login' element={ <Login /> }/>
          <Route path='/Register' element={ <Register /> }/>
          <Route path='/GetStudent/:stu_id/:id' element={ <GetStudent /> }/>
          <Route path='*' element={ <Error404 /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
