export const buildEmbed = (queryIndentifer) => {
    const queryURL = `https://archive.org/embed/${queryIndentifer}`
    const embedURL = `<iframe src="${queryURL}" width="640" height="480" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>`

    console.log(embedURL);
    
    return embedURL
};



{/* <iframe src="https://archive.org/embed/peril_of_doc_ock" width="640" height="480" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe> */}
{/* <iframe src="https://archive.org/embed/peril_of_doc_ock&autoplay=1" width="640" height="480" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe> */}
// https://archive.org/embed/msdos_Prince_of_Persia_1990#loading