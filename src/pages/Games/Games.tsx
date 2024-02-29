import MenuAdmIsLogged from "../../components/MenuAdmIsLogged"
import MenuIsLogged from "../../components/MenuIsLogged"
import GameList from "../../components/GameList"
import { gameListMock } from "../../mocks/games.mock"
import { useState } from "react"
import { GameType } from "../../types/game.types"
import Input from "../../components/Input"
import { ChangeEvent } from "react"

const Games = () => {

    const userInStorage = localStorage.getItem("loggedUser")
    let user 
    if(userInStorage){
        user = JSON.parse(userInStorage)
    }

    //no código acima eu capturo o objeto json de chave loggedUser
    //crio uma variável nula chamada user
    //verifico se existe o objeto json loggedUser
    //converso esse objeto json para javascript e guardo este valor na variável user
    //preciso fazer isso porque o typescript entende que userInStorage tem chances de ser nulável
    //portanto ele não aceita que uma const possa ser nula ou uma "string", já que constantes nunca mudam

    const [list, setList] = useState<GameType[]>([])
    //lista a ser renderizada na page de games
    const [search, setSearch] = useState<string>("")
    //aqui armazenarei o valor do meu input de busca a cada mudança

    const initializedList = () =>{
        //essa função tem como objetivo pegar a lista mockada e passar pro useState
        const storageList = localStorage.getItem("gameList")
        //tento pegar uma objeto JSON do meu localStorage chamado gameList
        //se tiver alguma coisa salva cadastrada no localStorage nós pegaremos
        let gameList: GameType[] = [...gameListMock]
        //estou pegando a minha lista de jogos mockados
    
        if(storageList){
            //caso exista algo no meu localStorage chamado gameList eu caio nesse if
            gameList = gameList.concat(JSON.parse(storageList))
            //falo que minha gameList aqora é meu mock + a lista JSON convertida para javascript
        }

        setList(gameList)
        //pego a minha lista do localStorage + a mockada e seto no meu useState
    }

    if(list.length < 1){
        //se o meu list tem nada eu inicio a função de setar a lista no useState
        initializedList()
    }

    const handleStorage = (e: StorageEvent) =>{
        //a typagem StorageEvent não precisa ser importada de nenhum lugar
        //ela é nativa da api localStorage e é interpretada pelo navegador automaticamente
        e.preventDefault()

        if(e.key === "gameList"){
            let parseList:GameType[] = []
            parseList = JSON.parse(localStorage.getItem("gameList") || "")
            setList(parseList)
        }
    }

    window.addEventListener("storage", handleStorage)
    //aqui adiciono um evento a tela toda
    //esse evento escuta especificamente modificações no localStorage
    //podemos filtrar qual objeto do localStorage queremos ouvir
    //na handleStorage colocamos uma condificonal apenas para o objeto gameList
    //quando um jogo for adicionado ao localStorage uma nova lista será setada no useState

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>{ 
        //importei a typagem ChangeEvent do react
        //essa typagem é adequada para escutar mudanças de valor constantes e instantâneas
        //será usado para escutar todas as mudanças de um value de um input
        //como o input não está em um form usamos o HTMLInputElement como typagem
        //eu sempre consigo escutar esse evento porque o value do meu input é igual ao search do useState
        //esse search sempre será mudado com setSearch por causa dessa função que escuta mudanças no value do input
        e.preventDefault()

        setSearch(e.target.value)
        //aqui eu sempre pego o valor que esta no input de pesquisa e passo para o search do useState de search

        const searchList = list.filter((game) => 
            game.nome.toLowerCase().includes(search.toLowerCase())
            // aqui eu pego e faço um filter em list
            // deixo todas as letras minúsculas para evitar divergências
            // e filtro pelo resultado do meu método includes 
            // no includes verifico se no nome do meu game inclui a sequência de letras que esta no search no momento
            || game.categoria.toLowerCase().includes(search.toLowerCase())
            //faço o mesmo mas agora verificando também se esses caracteres aparecem em categoria
            //e isso retorna uma lista com todos os elementos que passam no filtro
        )

        if(e.target.value === ""){
            const localList = JSON.parse(localStorage.getItem("gameList") || "")
            setList(localList)
        }else if(e.target.value !== "" && searchList.length === 0){
            setList([])
        }else{
            setList(searchList)
            //caso exista algo no input quer dizer que searchList ou tem itens que atendem o que eu espero ou não tem nada
            //e eu renderizo a minha searchList passando ela para meu list
        }
    }

    return (
    <div className="games">
        {
            user.isAdm ? <MenuAdmIsLogged /> : <MenuIsLogged />
            //se o usuario for um administrador eu renderizo um componente
            //se não for eu renderizo outro
        }
        <div className="games__search">
            <Input className="games__search__input" value={search} onChange={handleSearch} type="text" name="search" placeholder="pesquisar jogo" />

        </div>
        <h2 className="games__title">Avalie os seus games favoritos</h2>
        <GameList list={list} className="cardList" />
    </div>
    
    )
}

export default Games