const startMenu = select("#start-menu");
const start = select("#start");
const tags = selectAll(".tags");
const body = select("body");
const main = select("main");
const aside = select("aside");
const cardContainer= select("#cards");
const cards = selectAll(".card");
const contextMenu = select("#context-menu");
const overlayBox = selectAll(".overlay-box");
const options = selectAll(".options");
const dbType = selectAll(".db-type");
const maintenance = select(".maintenance");
const animeBox = select(".anime-box");
const audioBox = select(".audio-box");
const movieBox = select(".movie-box");
const photoBox = select(".photo-box");
const imageBox = select(".image-box");
const artworkBox = select(".artwork-box");
const videoBox = select(".video-box");
const documentBox = select(".document-box");
const gifBox = select(".gif-box");
const overlayContentBox = selectAll(".overlay-content-box");
const animeTags = selectAll(".anime-tag");
const animeUploadForm = select("#animeUpload")
const submitFormButton = select('#submitForm');


/* let animeTagData = this.getAttribute("anime-tag-data"); */

let animes = [
    {
        name: "Another",
        image: "https://cdn.myanimelist.net/images/anime/4/75509.jpg",
        tags: ["Horror", "Mystery", "Supernatural", "Suspense"],
        episode: "12",
        date: " Jan 10, 2012",
        duration: "24 min",
        episodes: [
            {
                name: "Rough Sketch",
                number: "1"
            },
            {
                name: "Blueprint",
                number: "2"
            },
            {
                name: "Bone Work",
                number: "3"
            },
            {
                name: "Put Flesh",
                number: "4"
            },
            {
                name: "Build Limbs",
                number: "5"
            },
            {
                name: "Face To Face",
                number: "6"
            },
            {
                name: "Sphere Joint",
                number: "7"
            },
            {
                name: "Hair Stand",
                number: "8"
            },
            {
                name: "Body Paint",
                number: "9"
            },
            {
                name: "Glass Eye",
                number: "10"
            },
            {
                name: "Makeup",
                number: "11"
            },
            {
                name: "Stand By Oneself",
                number: "12"
            }
        ]
    }, {
        name: "3D Kanojo: Real Girl",
        image: "https://cdn.myanimelist.net/images/anime/1327/93616.jpg",
        tags: ["Romance", "School"],
        episode: "12",
        date: "Apr 4, 2018",
        duration: "24 min"
    }
];

function select (element) {
    return document.querySelector(element)
};

function selectAll (element) {
    return document.querySelectorAll(element)
};