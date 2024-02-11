import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Portfolio from './components/portfolio/Portfolio'
import Store from './components/store/Store'

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <ol>
          <li><Link to={'/portfolio'}>Портфолио с фильтрами.</Link></li>
          <li><Link to={'/store'}>Расположение товаров.</Link></li>
        </ol>
      } />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/store' element={<Store />} />
    </Routes>
  )
}

export default App
