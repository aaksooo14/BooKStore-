import { Route, Routes } from 'react-router-dom'
import Home from '../src/home/Home'
import Courses from '../src/courses/Courses'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './contact/Contact'



const App = () => {
  return (
    <>

      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Courses />} />
          <Route path='/signup' element={< Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </div>

    </>
  )
}

export default App
