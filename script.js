const api_url = "https://dummyjson.com/quotes/random";

async function randoquotes(url){
    const response = await fetch(url)
    const data = await response.json()
    console.log(data); 
}

randoquotes(api_url);