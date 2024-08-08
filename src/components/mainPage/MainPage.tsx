import {useTypewriter } from 'react-simple-typewriter'
import './MainPage.css'
import picture from '../../assets/devPortfolio.jpeg'
import '../../App.css'
import { Tooltip } from '@mui/material'

const MainPage = () => {

    const [typeEffect] = useTypewriter({
        words: ['Web Developer', 'Mobile Dev', 'Developer.'],
        loop: undefined,
        typeSpeed: 100,
        deleteSpeed: 40
    })
    const [RetypeEffect] = useTypewriter({
        words: ['JavaScript, Node JS, React JS, SQL', 'React Native', 'My name is Gabriel Fernandes!'],
        loop: undefined,
        typeSpeed: 120,
        deleteSpeed: 40
    })

    return (
        <>
            <section className='home cannot-overflow'>
                <div className='developerPortfolioText'>
                    <h1 id='programmerIntroduction'>Hello! I´m a {typeEffect}</h1>
                    <h3 id='techList'>{RetypeEffect}</h3>
                    <button className="button" onClick={()=>location.href="https://github.com/GabrielFer555"} id='github-button'></button>
                </div>
                <div className='picturePartPortfolioDev'>
                    <Tooltip title="Acessar meu github" arrow color='#000000'> 
                    <figure>
                        <a href="https://github.com/GabrielFer555" target='_blank' rel='noopener noreferrer'>
                            <img src={picture} id="devPicture" alt="Developer portrait" />
                        </a>
                    </figure>
                    </Tooltip>
                </div>
            </section>
        </>
    )
}

export default MainPage