import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Condition } from './components/condition';
import { Dashboard } from './components/dashboard';
import { Login } from './components/login';
import { AppLayout } from './layout/appLayout'

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AppLayout />}>
              <Route path='dashboard' element={<Dashboard />}></Route>
              <Route path='condition' element={<Condition />}></Route>
              <Route path='login' element={<Login />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
