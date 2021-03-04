// Import functions from API search provider
import { getArcadeTitles , useArcadeTitles, useQueryResults } from "./searchProvider.js";
// Import embed function to create iframe of returned game
import { buildEmbed } from "../embed/embedGame.js";

// Target container div in DOM
const gameTarget = document.getElementById("embed_container")

export const buildSearch = (buildQuery) => {
    // Make fetch call
    getArcadeTitles(buildQuery)
    .then(() => {
        // Store copy of results in query in the following variables
        let testResults = useArcadeTitles()
        let testQuery = useQueryResults()
        console.log(testResults);
        console.log(testQuery);
        
        // Create a random interger that is less than or equal to the..
        // length of the testResults array.
        const randomIdentifier = Math.floor(Math.random() * testResults.length)
        console.log(randomIdentifier);

        // Declare variable for the identifer property of the matching array index 
        const randomGame = testResults[randomIdentifier].identifier

        // Pass randomGame property to buildEmbed function to create an iFrame..
        // with a src attribute generated from randomGame and send to the DOM.
        gameTarget.innerHTML = buildEmbed(randomGame)
        
    })
};



 