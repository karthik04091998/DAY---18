
async function animeQuotes(){
    try{
        const response = await fetch(`https://animechan.xyz/api/quotes`,
        {
            method: 'GET',
        }
    );
    const animeQuote = await response.json();

    const AnimeQuotes = document.querySelector('.AnimeQuotes');

    const ul = document.createElement('ul');

    animeQuote.forEach(anime => {
        const li = document.createElement('li');
        li.textContent = anime.quote;
        ul.appendChild(li);
    });

    AnimeQuotes.appendChild(ul);

    }
    catch(err){
        console.log(err);
    }
}

animeQuotes();