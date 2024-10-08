import { useState } from 'react'
import '../../App.css'
import 'notyf/notyf.min.css';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';


const ContactMe = () => {

    const ThankForContacting = () =>{
       return(
        <section className='home'>
            <div className='contactTitleBox presentationTextPortfolio '>
            <h3 className="thanks-title">Obrigado por entrar em contato
            </h3>
            <p>Logo mais estarei lhe dando retorno.</p>
            <Link to="/main"><button className='button'>Voltar</button></Link>
            </div>
        </section>
       )
    }

    const [nome, setNome] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState('')


    const [state, handleSubmit] = useForm('xkgwrega')

    if (state.succeeded) {
        return (
            <ThankForContacting/>
            
        )
    }


    return (
        <section className='home home-contact'>
            <div className='contactTitleBox cannot-overflow'>
                <h3>Vamos criar algo significativo juntos?</h3>
                <hr />
                <form action="" onSubmit={handleSubmit} className='form-contact'>
                    <div className='input-container'>
                        <div className='input-container-item'>
                            <label htmlFor="name">Nome</label>
                            <input className='input-item' required type='text' aria-label='nome' placeholder='Seu nome' id="name" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} autoComplete='off'/>
                            <ValidationError
                                prefix="Nome"
                                field="nome"
                                errors={state.errors}
                            />
                        </div>
                        <div className='input-container-item'>
                        <label htmlFor="email">Email</label>
                            <input required  className='input-item' type='email' aria-label='Email' placeholder='helloWorld@email.com' id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='off'/>
                            <ValidationError
                                prefix="This field"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div className='input-container-item'>
                            <textarea className='input-item' value={message}required rows={7} onChange={(txt)=> setMessage(txt.target.value)}placeholder='Mensagem' id='message' name='message'></textarea>
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                         </div>

                    </div>
                    <div className='form-contact-button-group'>
                        <button className='button' type="submit" disabled={state.submitting} id='emailText'></button>
                    </div>

                </form>



            </div>
        </section>
    )
}

export default ContactMe