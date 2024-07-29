const btns = document.querySelectorAll("button");
const root = document.getElementById("root");

const _baseUrl = "https://api.sampleapis.com/movies/";

function getActMovie() {
    fetch(_baseUrl + "animation")
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            showMovies(data);
        });
};
btns[0].onclick = () => {
    getActMovie()
};  

function getClassicMovie(){ 
    fetch(_baseUrl+"classic") 
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        showMovies(data);
    });
};
btns[1].onclick = () => {
getClassicMovie()
};   

function getComedyMovie(){ 
    fetch(_baseUrl+"comedy") 
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        showMovies(data);
    });
};
btns[2].onclick = () => {
getComedyMovie()
};  

function getDramaMovie(){ 
    fetch(_baseUrl+"drama") 
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        showMovies(data);
    });
};
btns[3].onclick = () => {
getDramaMovie()
};  

function getHorrorMovie(){ 
    fetch(_baseUrl+"horror") 
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        showMovies(data);
    });
};
btns[4].onclick = () => {
getHorrorMovie()
}; 

function getFamilyMovie(){ 
    fetch(_baseUrl+"family") 
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        showMovies(data);
    });
};
btns[5].onclick = () => {
getFamilyMovie()
};    

function getMysteryMovie(){ 
    fetch(_baseUrl+"mystery") 
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        showMovies(data);
    });
};
btns[6].onclick = () => {
getMysteryMovie()
};     

function getWesternMovie(){ 
    fetch(_baseUrl+"western") 
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        showMovies(data);
    });
};
btns[7].onclick = () => {
getWesternMovie()
};  

function showMovies(arr) {
    root.innerHTML = "";
    for (const movie of arr) {
        root.innerHTML += ` 
        <div class="card">  
         <h2>${movie.title}</h2> 
            <img width='300px' src=${movie.posterURL} /> 
            <p>${movie.imdbId}</p
        </div> 
        `;
    };
};