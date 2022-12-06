import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './layoutComponents/Layout'
import Main from './main/Main'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/main' element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
