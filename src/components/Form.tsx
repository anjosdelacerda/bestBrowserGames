import React from "react"

type FormProps = React.ComponentProps<'form'>

// o React oferece types PRONTOS para os desenvolvedores
// o ComponentProps importado do próprio react cria typagens para components
// ele espera receber como string o valor de uma tag HTML
// neste caso estamos criando uma typagem de componente form
// com isso criamos um type pronto que já espera receber tudo que um componente de formulario recebe
//ex: onSubmit, children (elementos entre as tags <> e </>), className, id e entre outros

const Form = ({...props}: FormProps) =>{

    //em {...props} que estamos desestruturando de props dizemos que queremos todas as propriedades que tem no componentProps<'form'>
    //é como se extivessemos desestruturando tudo assim {children, className, id, type, onSubmit}: FormProps

    return(
        //passando {...props} dentro da tag html dizemos que tudo que eu passar na criação do componente eu quero
        //se eu colocar className no componente criado um className irá aparecer, se eu não passar não vai aparecer
        //nada disso interferirá no componente
        <form {...props}>
            
        </form>
    )
}

export default Form