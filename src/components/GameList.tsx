import { gameListMock } from "../mocks/games.mock";
import Card from "./Card";

const GameList = () => {

    const storageList = localStorage.getItem("gameList")
    let gameList = [...gameListMock]

    if(storageList){
        gameList = gameList.concat(JSON.parse(storageList))
    }

    console.log(gameList)

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