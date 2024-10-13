const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button");

function randomQuote() {
    fetch("http://api.quotable.io/random").then(res => res.json()).then(result => {
            console.log(result);
            quoteText.innerText = result.content;
        });
    }

    quoteBtn.addEventListener("click", randomQuote);

