import { LoginType } from "../../types/login.types";
import { FormEvent } from "react";
import { findUserLogin } from "../../utils/findUserLogin.utils";
import { comparePasswords } from "../../utils/comparePasswords.utils";

const Login = () => {

  const submitHandler = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const values: { [key: string]: string } = {};

   formData.forEach((value, key)=>{
    values[key] = value.toString()
   })

   const loginUser: LoginType = {
    email: values.email,
    senha: values.senha
   }

   const findUser = findUserLogin(loginUser)
   if(!findUser){
    alert('email ou senha incorretos')
   }

   if(findUser){
    const correctPassword = comparePasswords(findUser, loginUser)

    if(correctPassword){
      alert('Login efetuado com sucesso')
    }else {
      alert('email ou senha incorretos')
    }
   }
  }

  return (
    <div className="login">
      <h2 className="login_title">Login</h2>
      <form className="login__form" onSubmit={submitHandler}>
        <input className="login__form__input" type="text" placeholder="email" name="email" id="login-nome" />
        <input type="password" placeholder="senha" name="senha" id="login-senha" />
        <button className="login__form__button">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
