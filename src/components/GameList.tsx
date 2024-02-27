import { gameListMock } from "../mocks/games.mock";
import Card from "./Card";

const GameList = () => {

    const storageList = localStorage.getItem("gameList")
    //tento pegar uma objeto JSON do meu localStorage chamado gameList
    let gameList = [...gameListMock]
    //estou pegando a minha lista de jogos mockados

    if(storageList){
        //caso exista algo no meu localStorage chamado gameList eu caio nesse if
        gameList = gameList.concat(JSON.parse(storageList))
        //falo que minha gameList aqora é meu mock + a lista JSON convertida para javascript
    }

    return (
        <ul className="gameList">
            {gameList.map((game) => (
                <li key={game.id}>
                    <Card
                        key={game.id}
                        nome={game.nome}
                        urlImage={game.urlImage}
                    />
                </li>
            ))}
        </ul>
    );

}

export default GameList