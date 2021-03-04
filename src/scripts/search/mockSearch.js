import { getArcadeTitles , useArcadeTitles, useQueryResults } from "./searchProvider.js";
import { buildEmbed } from "../embed/embedGame.js";

const gameTarget = document.getElementById("embed_container")

export const buildSearch = (buildQuery) => {
    getArcadeTitles(buildQuery)
    .then(() => {
        // debugger
        let testResults = useArcadeTitles()
        let testQuery = useQueryResults()
        console.log(testResults);
        console.log(testQuery);
        // const testIdentifier = testResults[6].identifier
        const randomIdentifier = Math.floor(Math.random() * testResults.length)
        console.log(randomIdentifier);
        const randomGame = testResults[randomIdentifier].identifier
        
        gameTarget.innerHTML = buildEmbed(randomGame)
        
    })
};



 