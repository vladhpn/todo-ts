import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar  from './components/Navbar';
import AboutPage from './pages/AboutPage';
import TodosPage from './pages/TodosPage';




const App = () => {

  

  return (
   <BrowserRouter>
      <Navbar />
      <div className='container'>
       <Routes>
        <Route path='/' element={<TodosPage />} />
        <Route path='/about' element={<AboutPage />} />
       </Routes>
      </div>

      </BrowserRouter>
  );
}

export default App;
