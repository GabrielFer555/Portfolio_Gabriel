import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import '../../App.css'

const Menu = () => {

  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location.pathname);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location.pathname !== displayLocation) setTransistionStage("fadeOut") 
  }, [location.pathname, displayLocation]);


  return (
    <>
      <nav className='navigationPortfolio'>
        <ul className='list'>
          <li><Link className="itemList" to='/main'>Home</Link></li>
          <li><Link className="itemList" to='/about-me'>Sobre mim</Link></li>
          {/*a<li> <Link to='/' className="itemList">Conhecimentos</Link>  </li>*/}
          <li> <Link to='/contact' className="itemList">Contato</Link> </li>
        </ul>
      </nav>
      <main className={`${transitionStage}`}
          onAnimationEnd={() => {
            if (transitionStage === "fadeOut") {
              setDisplayLocation(location.pathname);
              setTransistionStage("fadeIn");
              
            }
          }} >
          <Outlet />
      </main>
      <footer></footer>
    </>
  )
}

export default Menu