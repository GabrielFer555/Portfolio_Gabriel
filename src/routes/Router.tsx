import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import MainPage from '../components/mainPage/MainPage';
import AboutMe from '../components/aboutMe/AboutMe';
import Menu from '../components/Menu/Menu';
import ContactMe from '../components/contactMe/ContactMe';

const PortfolioRouter = () => {
  return (
    <div >
    <Router>
      <Routes>
        <Route path="/"  element={<Menu />}>
        <Route index element={<Navigate to="/main" replace />} />
          <Route index path="main" element={<MainPage />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="contact" element={<ContactMe />} />
        </Route>
      </Routes>
      </Router>
      </div>

  )
}

export default PortfolioRouter