import React from "react";

type InputProps = React.ComponentProps<'input'>

//utilizo a typagem já pronta do react chamada ComponentProps
//digo que esta props será uma props para um input
//agora essa typagem tem tudo que um input pode receber
//ex: name, id, className, value, placeholder...

const Input = ({...props}: InputProps) => {
    //{...props} diz que eu quero tudo que tem de typagem dentro de ComponentProps<'input'>
    //ex: é como se eu fizesse {placeholder, className, id, name, type}: InputProps

    return(
        //o {...props} adiciona tudo que eu colocar no component dentro da tag
        <input {...props} />
    )
}

export default Input