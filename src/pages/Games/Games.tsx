import MenuAdmIsLogged from "../../components/MenuAdmIsLogged"
import MenuIsLogged from "../../components/MenuIsLogged"
import GameList from "../../components/GameList"
import { gameListMock } from "../../mocks/games.mock"
import { useState } from "react"
import { GameType } from "../../types/game.types"

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

    return (
    <div className="games">
        {
            user.isAdm ? <MenuAdmIsLogged /> : <MenuIsLogged />
            //se o usuario for um administrador eu renderizo um componente
            //se não for eu renderizo outro
        }
        <h2 className="games__title">Avalie os seus games favoritos</h2>
        <GameList list={list} className="cardList" />
    </div>
    
    )
}

export default Games