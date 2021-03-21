import { render } from '@testing-library/react'
import React, { useState } from 'react'
import {Form,Input} from '@rocketseat/unform'
/*import * as Yup from 'yup';*/
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
   const [goto,setGoto] = useState(1);
   const [active,setActive] = useState(true);
   const [name,setName] = useState('Criar nova conta');

   function handleClick (){
       setClick(!click);
       click ? setValue('text'): setValue('password')
   }

   function handleLink (){
    setGoto(1);
    setActive(false);
   }

   function handleLink2 (){
    setGoto(2);
    setActive(true);
   }
    
    return(
     <Opacidade className="opacity">
        {
            goto == 1 ?
                 <Form tamanho={goto}/* schema={Validator} onSubmit={handleSubmit} */className="form-login">
                    <Div className="div-header">
                        <Title className="title">Cadastramento</Title>
                        <FaExpand></FaExpand>
                    </Div>
                    <Div className="div-log-cad">
                        <Link active={goto}  onClick= {handleLink} className="link-cad"> Logar </Link>
                        <Link active={goto}   onClick= {handleLink2} className="link-log"> Cadastramento </Link>
                    </Div>
                    <Fieldset className="div-input" >
                        <Input 
                            className="input"
                            type="text"
                            name="usuario" 
                            placeholder= "nome do aluno">
                        </Input>
                        <Input 
                            className="input"
                            type={value}
                            name="senha"
                            placeholder= "senha se usuário">
                        </Input>
                    </Fieldset> 
                        {/* click ?
                                <FaEye className="see-password" onClick={handleClick}></FaEye>
                                :
                                <FaEyeSlash className="see-password" onClick={handleClick}></FaEyeSlash>
                        */}
                    <Div className="div-footer">
                        <Button id="button-enter" type="submit"> Entrar</Button>
                        <Button id="button-cancel" type="submit">Ignorar</Button>
                   </Div>
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
                    <Link   onClick= {handleLink2} className="link-log"> Cadastramento </Link>
                </Div>
                    <Fieldset >
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
                        <Fieldset className="choice-sexo">
                            <legend >
                             Sexo
                            </legend>
                             M <Input className="M" name="sexo" value="M" type="radio"/>
                              <Input className="F" name="sexo" value="F" type="radio"></Input>F
                        </Fieldset>
                        <Input 
                            className="input"
                            type={value}
                            name="senha"
                            placeholder= "senha do usuário">
                        </Input>
                        
                        <Input 
                            className="input"
                            type="text"
                            name="senha"
                            placeholder= "nome do encarregado">
                        </Input>
                        <Input 
                            className="input"
                            type="number"
                            name="senha"
                            placeholder= "Telefone 1">
                        </Input>
                        <Input 
                            className="input"
                            type="number"
                            name="senha"
                            placeholder= "Telefone 1">
                        </Input>
                        <Input 
                            className="input"
                            type={value}
                            name="senha"
                            placeholder= "senha do encarregado">
                        </Input>
                     </Fieldset>
                        
                   <Div className="div-footer">
                     <Button id="button-enter" type="submit">Cadastrar e Entrar</Button>
                     <Button id="button-cancel" type="submit">Ignorar</Button>
                   </Div>
                </Form>
        }
     </Opacidade>
     )
}
export default Login;