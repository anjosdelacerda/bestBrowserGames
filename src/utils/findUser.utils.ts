import { UserTypes } from "../types/user.types"
import { admUsers } from "../mocks/users.mock"

export const findUser = (user: UserTypes) =>{

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

    listaUsuarios = listaUsuarios.concat(admUsers)
    //tenho uma lista de administradores dentro deste código
    //a lista também é do tipo UserTypes[]
    //uno as duas listas com método concat
    //como lustaUsuarios é um let eu posso modificar a lista sempre que quiser

    //não cai no if de lista vazia, existem usuáruos cadastrados no local storage
   const emailAreadyExists = listaUsuarios.find((users) => users.email === user.email)
   //verifico se existe algum cadastro com o email igual ao do user passado no parâmetro de findUser
   

   if(emailAreadyExists){
    //usuario de email igual ao do parâmetro dessa função foi encontrado
    return `O e-mail ${emailAreadyExists.email} já está cadastrado em nosso sistema`
    //retornamos uma mensagem de que o email já esta cadastrado
   }else{
    return false
    //retornando um false, quando faço (emailAlreadyExists) na page Register, a função não cai na condição do if
   }

}

