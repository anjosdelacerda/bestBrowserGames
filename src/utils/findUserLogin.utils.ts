import { LoginType } from "../types/login.types"
import { UserTypes } from "../types/user.types"

export const findUserLogin = (user: LoginType) =>{

    const listaAtual = localStorage.getItem('listaUsuarios')
    //aqui eu capturo o valor do que esta dentro da chave 'listaUsuarios' do local storage
    let listaUsuarios: UserTypes[] = []
    //aqui tenho um array vazio do tipo UserTypes[]
  
    if(listaAtual){
      //se existir algum valor na chave 'listaUsuarios' do localStorage esse if acontece  
      listaUsuarios = JSON.parse(listaAtual)
      //listaUsuarios passará a ser uma lista javascript capturada do localStorage
    }

    if(!listaUsuarios || listaUsuarios.length < 1){
        return false
        //lista vazia eu retorno um false
    }

    //não cai no if de lista vazia, existem usuáruos cadastrados no local storage
   const findUser = listaUsuarios.find((users) => users.email === user.email)
   //verifico se existe algum cadastro com o email igual ao do user passado no parâmetro de findUser
   

   if(findUser){
    //usuario de email igual ao do parâmetro dessa função foi encontrado
    return findUser
    //retornamos o usuario inteiro para a page Login
   }else{
    return false
    //retornando um false, quando faço (findUser) na page Login, a função não cai na condição do if
   }

}

