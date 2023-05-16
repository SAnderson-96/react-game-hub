import Platform from "./game/platform";
import Genre from "./genre/genre";

interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

export default GameQuery;
