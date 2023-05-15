import Game from "../models/game/game";
import useData from "./useData";

const useGames = () => useData<Game>("/games");

export default useGames;
