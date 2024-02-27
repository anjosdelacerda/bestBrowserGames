import React from "react";
import Card from "./Card";
import { GameType } from "../types/game.types";

type GameListProps = React.ComponentProps<"ul"> & {
    list: GameType[]
}

//crio um component de props para a lista
//eu espero receber a lista do useState da page de Games em list

const GameList = ({list, ...props}: GameListProps) => {


    return (
        //tudo que eu espero receber em uma lista esta em props
        //no list terei a lista que deverá ser renderizada.
        <ul {...props}>
            {list.map((game) => (
                <li key={game.id}>
                    <Card
                        key={game.id}
                        nome={game.nome}
                        urlImage={game.urlImage}
                        className="cardList__card"
                    />
                </li>
            ))}
        </ul>
    );

}

export default GameList