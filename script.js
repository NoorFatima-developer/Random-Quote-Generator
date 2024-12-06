const api_url = "https://dummyjson.com/quotes/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newquote = document.getElementById("newquote");

async function randomquotes(url){
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data); 
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}

randomquotes(api_url);

newquote.addEventListener("click", function(){
    randomquotes(api_url)
})