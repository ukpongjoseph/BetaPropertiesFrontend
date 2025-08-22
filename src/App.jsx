import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Landing/>}/>
          <Route path='/signUp' element = {<SignUp/>}/>
          <Route path='/signIn' element = {<SignIn/>}/>
          <Route path='/Home' element = {<Home/>}/>
          <Route path='*' element = {<NotFound/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
