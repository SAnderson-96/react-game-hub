import Genre from "../models/genre/genre";
import useData from "./useData";

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
