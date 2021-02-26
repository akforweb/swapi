export const getCharacters = async () => await (await fetch("https://swapi.dev/api/people")).json();

// export const getEntityByUrl = async (url) => await (await fetch(url)).json();
export const getEntityByUrl = async (url) => {
    const response = await (await fetch(url)).json();
    console.log('response', response)
    return response;
};
