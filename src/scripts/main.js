// Import buildSearch function to generate embeded content
import { buildSearch } from "./search/mockSearch.js";

// Declare array to store strings simulating a user's search entry.
let findGame = ["outrun", "x-men", "tetris"]

// Pass array index to buildSearch function to generate content.
buildSearch(findGame[1])


