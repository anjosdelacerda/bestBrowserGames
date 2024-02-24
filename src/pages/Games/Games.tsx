import MenuAdmIsLogged from "../../components/MenuAdsIsLogged"
import MenuIsLogged from "../../components/MenuIsLogged"
import GameList from "../../components/GameList"

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

    return (
    <div className="games">
        {
            user.isAdm ? <MenuAdmIsLogged /> : <MenuIsLogged />
            //se o usuario for um administrador eu renderizo um componente
            //se não for eu renderizo outro
        }
        <h2 className="games__title">Avalie os seus games favoritos</h2>
        <GameList />
    </div>
    
    )
}

export default Games