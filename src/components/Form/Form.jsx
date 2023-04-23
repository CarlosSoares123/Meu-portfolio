import * as F from './Form'
import * as C from '../../App.styles'
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";



export const Form = () => {
  return (
    <F.formContainer>
      <C.titulo1>📃Contacto</C.titulo1>

    <div className='content'>
      
    <F.formEndereco>

      <div className="EnderecoTexto">
        <BsFillEnvelopeFill style={{fontSize: '35px'}}/>
      <div >
        <h3>Email</h3>
        <span>carlossoarespedro20@gmail.com</span>
      </div>
      </div>

      <div className="EnderecoTexto">
      <BsWhatsapp style={{fontSize: '35px'}}/>
      <div>
        <h3>Whatsapp</h3>
        <span>+244 990990990</span>
      </div>
      </div>
    </F.formEndereco>


    <F.formulario>
      <input type="text" placeholder='Nome'/>
      <input type="email" placeholder='Seu Email'/>
      <input type="text"  placeholder='Assunto'/>
      <textarea name="comment" id="" cols="10" rows="6" placeholder='Mensagem'></textarea>
      <C.ButaoPersonalizado>Enviar Mensagem</C.ButaoPersonalizado>
    </F.formulario>

    </div>

    </F.formContainer>
  )
}
