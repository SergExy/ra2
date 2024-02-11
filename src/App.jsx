import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Portfolio from './components/portfolio/Portfolio'
import Store from './components/store/Store'

function App() {
  return (
    <Routes>
      <Route path='/ra2/' element={
        <ol>
          <li><Link to={'/ra2/portfolio'}>Портфолио с фильтрами.</Link></li>
          <li><Link to={'/ra2/store'}>Расположение товаров.</Link></li>
        </ol>
      } />
      <Route path='/ra2/portfolio' element={<Portfolio />} />
      <Route path='/ra2/store' element={<Store />} />
    </Routes>
  )
}

export default App
