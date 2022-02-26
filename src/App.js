import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import GetTeacher from './Pages/GetTeacher';
import Error404 from './Pages/Error404';
import Home from './Pages/Home';
import EditTeacher from './Pages/EditTeacher';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/login' element={ <Login /> }/>
          <Route path='/register' element={ <Register /> }/>
          <Route path='/get_teacher' element={ <GetTeacher /> }/>
          <Route path='/edit_teacher/:stu_id' element={ <EditTeacher /> }/>
          <Route path='*' element={ <Error404 /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
