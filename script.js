const api_url = "https://dummyjson.com/quotes/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function randoquotes(url){
    const response = await fetch(url)
    const data = await response.json()
    console.log(data); 
}

randoquotes(api_url);