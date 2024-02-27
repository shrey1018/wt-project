
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ListPost from './pages/ListPost';
import CreatePost from './pages/CreatePost';
import NotFound from './components/NotFound';

function App() {


  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/list-post' element={<ListPost/>} />
          <Route path='/create-post' element={<CreatePost/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </Router>
      </div>
    </>
  )
}

export default App
