import { GameType } from "../types/game.types";
import { v4 as uuid } from "uuid";
//baixei na aplicação a biblioteca do uuid
//ela cria ids únicos automaticos em forma de string
//escolhi a ferramenta v4 da biblioteca para criar meus ids
//apelidei a ferramenta v4 de uuid

export const gameListMock: GameType[] = [
    {
        id: uuid(),
        nome: "Smash Karts",
        categoria: "Sports",
        urlGame: "https://smashkarts.io/",
        urlVideo: "https://youtu.be/BK__rAEEJ-w?si=y4RUIs13rxC2Sji7",
        urlImage: "https://i.pinimg.com/originals/44/e4/95/44e4959127ba414d712bffc50b5ba020.png"
    },
    {
        id: uuid(),
        nome: "Monopoly",
        categoria: "Strategy",
        urlGame: "https://richup.io/",
        urlVideo: "https://youtu.be/9eMxSbjE4a8?si=qEx5egIXmOmDX_B0",
        urlImage: "https://kevin.games/assets/images/games/richup-io.png"
    },
     {
        id: uuid(),
        nome: "Flexbox Froggy",
        categoria: "Strategy",
        urlGame: "https://flexboxfroggy.com/",
        urlVideo: "https://youtu.be/8qI9f5R-2Ok?si=KenNBJYIR6LCE9WO",
        urlImage: "https://www.giantbomb.com/a/uploads/scale_medium/87/878890/3318923-flexbox-froggy.png"
    }
    
]