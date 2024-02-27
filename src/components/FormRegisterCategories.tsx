import Input from "./Input"
import Form from "./Form"
import Button from "./Button"
import { FormEvent } from "react"
import findCategory from "../utils/findCategory.utils"

const FormRegisterCategories = () => {

    const registerCategory = (category: string) =>{
        const localCategories = localStorage.getItem("listCategories)")
        let listCategories: string[] = []

        if(localCategories){
            listCategories = JSON.parse(localCategories)
        }

        listCategories.push(category)
        localStorage.setItem("listCategories", JSON.stringify(listCategories))
    }

    const submitHandler =(e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        //impeço a atualização automatica por cada submissão 

        const formData = new FormData(e.currentTarget)
        //transformo o name do input em chave e seu value em valor 

        const values: {[key: string]: string} = {}
        //digo que values será do type desse objeto {[key: string]: string}
        //o type desse objeto tem uma key que será uma string 
        //esse type também terá um valor para esse key que também será uma string

        formData.forEach((value, key)=>{
            values[key] = value.toString()
            //direi que o meu values será igual a [key] que esta sendo percorrida no momento
            //e o value da key perseguida no momento receberá como valor o value do input do momento
            //passo toString() para o typescript não reclamar que é implicitamente any
        })

        const categoryIsAlreadyExists = findCategory(values.categoria)

        if(categoryIsAlreadyExists){
            alert(`A categoria ${values.categoria} já está cadastrada no sistema`)
        }else{
            registerCategory(values.categoria)
            alert(`A categoria ${values.categoria} foi registrada com sucesso`)
        }
    }

    return(
        <div className="formRegisterCategories">
            <h2 className="formRegisterCategories__title">Categorias</h2>
        <Form className="formRegisterCategories__form" onSubmit={submitHandler}>
            <Input className="formRegisterCategories__input" name="categoria" type="text" placeholder="categoria" />
            <Button type="submit">CADASTRAR</Button>
        </Form>
        </div>
    )

}

export default FormRegisterCategories