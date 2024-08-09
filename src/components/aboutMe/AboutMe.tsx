import '../../App.css'
import svg from '../../assets/javascriptDev.svg'
import englishSpeaker from '../../assets/englishSpeaker.svg'

const AboutMe = () => {
  return (
    <section className='home'>
      <div className='presentationTextPortfolio'>
        <h3 className='title'>Olá meu nome é Gabriel</h3>
        <p>Com 16 anos tive meu primeiro contato com linguagens de programação e foi amor a primeira vista, desde então venho me aprofundando em estudos relacionados a desenvolver aplicações web. <br />Atualmente construo aplicações frontend e mobile utilizando Javascript, principalmente utilizando o framework de React dando sempre enfase em qualidade, funcionalidade e robustez.</p>

        <img className="svgJavascript" src={svg} alt="javascript,html e css" />
      </div>
      <div className='presentationTextPortfolio' >
        <img className="svgJavascript" src={englishSpeaker} alt="javascript,html e css" />
        <h3 className='title'>It´s not all about coding!</h3>
        <p id='englishParagraph'>I´ve also studied English for many years now and I got a certification from EF-SET Standart English Test stating that my proficiency in english is in a C2 level. <br /> <a href="https://www.efset.org/cert/Cd2BSs" target='_blank'> You can access it here. </a>  </p>
      </div>
    </section>
  )
}

export default AboutMe