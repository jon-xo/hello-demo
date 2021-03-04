export const buildEmbed = (queryIndentifer) => {
    // Create URL using paramater
    const queryURL = `https://archive.org/embed/${queryIndentifer}`
    // Build iFrame element where the src attribute = queryURL
    const embedURL = `<iframe src="${queryURL}" width="640" height="480" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>`

    console.log(embedURL);
    
    return embedURL
};


// Embed URL Notes

{/* <iframe src="https://archive.org/embed/peril_of_doc_ock" width="640" height="480" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe> */}
{/* <iframe src="https://archive.org/embed/peril_of_doc_ock&autoplay=1" width="640" height="480" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe> */}
// https://archive.org/embed/msdos_Prince_of_Persia_1990#loading