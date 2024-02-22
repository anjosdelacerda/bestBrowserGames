import React from "react";

type ButtonProps = React.ComponentProps<'button'>

const Button = ({children,...props}: ButtonProps) => {
    //children são elementos ReactNode (elementos HTML) que podem ser filhos da tag button
    //os filhos sempre ficam entre as tags
    //ex: <button> texto aqui (este texto é um filho/children) </button>
    return(
        <button {...props}>{children}</button>
    )
}

export default Button