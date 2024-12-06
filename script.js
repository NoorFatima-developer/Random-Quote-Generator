const api_url = "https://dummyjson.com/quotes/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newquote = document.getElementById("newquote");
const tweet = document.getElementById("tweet");

async function randomquotes(url){
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data); 
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}

randomquotes(api_url);

function tweeter(){
    window.open("https://twitter.com/intent/tweet?text=Hello%20World");
}

// must use function keyword because we are passing argument so osko btana pryga k ye func hain..
// aghr ni argument pass krna chahty tu dont use func but osklye fer directly fetch k andr url pass krna pryga ta k isko randomquotes(api_url) hum essy call krain bs
// randomquotes(), then hi hum eventlistener m without func likh skty hain..
newquote.addEventListener("click", function(){
    randomquotes(api_url)
})

// use onclick instead of click but then must be use without event listener...
tweet.onclick = tweeter;