const url="https://api.tvmaze.com";
fetch("https://api.tvmaze.com/shows").then((response) => {
    return response.json();
}).then((object) => {
    moviesrender(object);
});

document.querySelector(".search").onclick = function (){
    let query=document.querySelector('input').value;
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`).then((response) => {

        return response.json();
    }).then((object) => {//value returned is not an object
        const parents= document.querySelector('#main');
        parents.innerHTML='';
        const footers=document.querySelector("#foot").innerHTML="";
        const maps=object.map((res) => res.show);
        moviesrender(maps);
    });
}
function moviesrender(object){
    object.forEach((movie) => {
        const onemovie = document.createElement('div');
        onemovie.classList.add('movie');

        const imageonemovie=document.createElement('img');
        imageonemovie.src=movie.image.medium;

        const hover = document.createElement('div');
        hover.classList.add('hovercard');
        hover.innerHTML=`<h3>Name : ${movie.name}</h3>
        <br>
        <p>Rating : ${movie.rating.average}</p>
        <br>
        <p>runtime : ${movie.premiered}</p>
        <br>
        <p>summary : ${movie.summary}</p>`;

        onemovie.appendChild(imageonemovie);
        onemovie.appendChild(hover);
        const parent = document.querySelector('#main');
        parent.appendChild(onemovie);
    });
}
