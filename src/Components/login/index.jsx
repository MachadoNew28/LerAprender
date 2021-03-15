import { render } from '@testing-library/react'
import React, { useState } from 'react'
import {Form,Input} from '@rocketseat/unform'
import * as Yup from 'yup';
import Opacidade, {Div, Title,Button, Image, Fieldset } from './styled'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import userIcon from './img/user.png'
import { FaExpand, FaEye, FaEyeSlash } from 'react-icons/fa';
/*const sms = 'Campo obrigatório';

const Validator = Yup.object().shape({
    usuario:Yup.string().usuario('Insira um nome de usuário válido').require(sms),
    senha: Yup.string().senha('Senha incorrecta').require(sms),
});
*/
function Login() {
   /* function handleSubmit(data){
        console.log('dates:=>',data);  }*/
   const [click,setClick] = useState(true);
   const [value,setValue] = useState('password');
   const [goto,setGoto] = useState(true);
   const [active,setActive] = useState(true);
   const [name,setName] = useState('Criar nova conta');

   function handleClick (){
       setClick(!click);
       click ? setValue('text'): setValue('password')
   }

   function handleLink (){
    setGoto(!goto);
    goto ? setName ('Criar Nova conta'): setName('iniciar sessão')
    setActive(!active);
}
    
    return(
     <Opacidade className="opacity">
        {
            goto ?<Form tamanho={goto}/* schema={Validator} onSubmit={handleSubmit} */className="form-login">
                     <Image src={userIcon}></Image>
                     <Title>Login</Title>
                     <Input 
                        className="input"
                        type="text"
                        name="usuario" 
                        placeholder= "nome de usuário">
                    </Input>
                 
                    <Input 
                        className="input"
                        type={value}
                        name="senha"
                        placeholder= "senha se usuário">
                    </Input>

                        { click ?
                                <FaEye className="see-password" onClick={handleClick}></FaEye>
                                :
                                <FaEyeSlash className="see-password" onClick={handleClick}></FaEyeSlash>
                        }
                    
                    <Button type="submit">Entrar</Button>
                    <Link   onClick= {handleLink} className="link-cadastro"> {name} </Link>
                    <Link to="/cadastro"  className="link-reset-password">Redefidir a senha</Link>
                </Form>
                :
                <Form   /* schema={Validator} onSubmit={handleSubmit} */className="form-cadastro">
                 <Div className="div-header">
                   <Title className="title">Cadastramento</Title>
                   <FaExpand></FaExpand>
                </Div>
                <Div className="div-log-cad">
                    <Link active={active}  onClick= {handleLink} className="link-cad"> Logar </Link>
                    <Link   onClick= {handleLink} className="link-log"> Cadastramento </Link>
                </Div>
                    <Fieldset>
                        <Input 
                            className="input"
                            type="text"
                            name="usuario" 
                            placeholder= "nome do aluno">
                        </Input>
                        <Input 
                            className="input"
                            type="date"
                            name="usuario" 
                            placeholder= "nascimento">
                        </Input>
                        <Input 
                            className="input"
                            type={value}
                            name="senha"
                            placeholder= "senha se usuário">
                        </Input>
                     </Fieldset>
                        { click ?
                                <FaEye className="see-password" onClick={handleClick}></FaEye>
                                :
                                <FaEyeSlash className="see-password" onClick={handleClick}></FaEyeSlash>
                        }
                    
                   <footer>
                     <Button type="submit">Entrar</Button>
                   </footer>
                </Form>
        }
     </Opacidade>
     )
}
export default Login;