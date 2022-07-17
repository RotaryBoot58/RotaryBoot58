/* startMenu.addEventListener("click", () => {
    aside.classList.toggle("hide-n-show")
}) */

tags.forEach(tag => {
    tag.addEventListener("click", () => {
        if (tag.innerText === ("Animes")) {
            render(animes, cardContainer)
        }; if (tag.innerText === ("Audios")) {
            console.log(tag)
        }; if (tag.innerText === ("Movies")) {
            console.log(tag)
        }; if (tag.innerText === ("Photos")) {
            console.log(tag)
        }; if (tag.innerText === ("Images")) {
            console.log(tag)
        }; if (tag.innerText === ("Anime Images")) {
            console.log(tag)
        }; if (tag.innerText === ("Videos")) {
            console.log(tag)
        };
    })
});

function render(list, box) {
    box.innerHTML = '';
    list.forEach(item => {
        box.innerHTML += `<div class="card">
        <div class="card-title">
        <p>${item.name}</p>
        </div>
        <img class="card-image" src="${item.image}">
        </div>`
    });
};

dbType.forEach(item => {
    item.addEventListener('click', (e) => {

        if (e.target.innerHTML === "Anime") {
            overlayContentBox.forEach(box => {
                if(box.getAttribute('data-type') === "anime") {
                    showOverlayContent(box)
                }
            });
        } 
        
        if (e.target.innerHTML === "Audio") {
            overlayContentBox.forEach(box => {
                if(box.getAttribute('data-type') === "audio") {
                    showOverlayContent(box)
                }
            });
        } 
        
        if (e.target.innerHTML === "Movie") {
            overlayContentBox.forEach(box => {
                if(box.getAttribute('data-type') === "movie") {
                    showOverlayContent(box)
                }
            });
        }

        if (e.target.innerHTML === "Photo") {
            overlayContentBox.forEach(box => {
                if(box.getAttribute('data-type') === "photo") {
                    showOverlayContent(box)
                }
            });
        } 

        if (e.target.innerHTML === "Image") {
            overlayContentBox.forEach(box => {
                if(box.getAttribute('data-type') === "image") {
                    showOverlayContent(box)
                }
            });
        }  

        if (e.target.innerHTML === "Artwork") {
            overlayContentBox.forEach(box => {
                if(box.getAttribute('data-type') === "artwork") {
                    showOverlayContent(box)
                }
            });
        }  

        if (e.target.innerHTML === "Video") {
            overlayContentBox.forEach(box => {
                if(box.getAttribute('data-type') === "video") {
                    showOverlayContent(box)
                }
            });
        }  

        if (e.target.innerHTML === "Document") {
            overlayContentBox.forEach(box => {
                if(box.getAttribute('data-type') === "document") {
                    showOverlayContent(box)
                }
            });
        }  

        if (e.target.innerHTML === "Gif") {
            overlayContentBox.forEach(box => {
                if(box.getAttribute('data-type') === "gif") {
                    showOverlayContent(box)
                }
            });
        } 
    });
});

function hideOverlayContent(box) {
    box.forEach(i => {
        i.classList.remove("showX");
        i.classList.add("hideX");
    });
}

function showOverlayContent(box) {
    if(box.classList.contains("showX")) {
        hideOverlayContent(overlayContentBox)
    } else {
        hideOverlayContent(overlayContentBox)
        box.classList.remove("hideX");
        box.classList.add("showX");
    }
}

options.forEach(option => {
    option.addEventListener('click', (e) => {

        if (e.target.innerHTML === "Search Image") {
            overlayBox.forEach(box => {
                if(box.getAttribute('data-boxname') === "search-image") {
                    showOverlay(box)
                }
            });
        } 
        
        if (e.target.innerHTML === "Edit Metadata") {
            overlayBox.forEach(box => {
                if(box.getAttribute('data-boxname') === "edit-metadata") {
                    showOverlay(box)
                }
            });
        } 
        
        if (e.target.innerHTML === "Upload DB") {
            overlayBox.forEach(box => {
                if(box.getAttribute('data-boxname') === "upload-db") {
                    showOverlay(box)
                }
            });
        }
    });
});

function hideOverlay(box) {
    box.forEach(i => {
        i.classList.remove("showY");
        i.classList.add("hideY");
    });
}

function showOverlay(box) {
    if(box.classList.contains("showY")) {
        hideOverlay(overlayBox)
    } else {
        hideOverlay(overlayBox)
        box.classList.remove("hideY");
        box.classList.add("showY");
    }
}

animeTags.forEach(tag => {
    tag.addEventListener('click', (e) => {

        if (e.target.innerHTML === "Action") {
            animeTags.forEach(item => {
                if(item.getAttribute('anime-tag-data') === "action") {
                    selectTag(item)
                }
            });
        } 
        
        if (e.target.innerHTML === "Comedy") {
            animeTags.forEach(item => {
                if(item.getAttribute('anime-tag-data') === "comedy") {
                    selectTag(item)
                }
            });
        } 
        
        if (e.target.innerHTML === "Horror") {
            animeTags.forEach(item => {
                if(item.getAttribute('anime-tag-data') === "horror") {
                    selectTag(item)
                }
            });
        } 
        
        if (e.target.innerHTML === "Sports") {
            animeTags.forEach(item => {
                if(item.getAttribute('anime-tag-data') === "sports") {
                    selectTag(item)
                }
            });
        } 
        
        if (e.target.innerHTML === "Adventure") {
            animeTags.forEach(item => {
                if(item.getAttribute('anime-tag-data') === "adventure") {
                    selectTag(item)
                }
            });
        } 
        
        if (e.target.innerHTML === "Drama") {
            animeTags.forEach(item => {
                if(item.getAttribute('anime-tag-data') === "drama") {
                    selectTag(item)
                }
            });
        } 
        
        if (e.target.innerHTML === "Mystery") {
            animeTags.forEach(item => {
                if(item.getAttribute('anime-tag-data') === "mystery") {
                    selectTag(item)
                }
            });
        }
        
        if (e.target.innerHTML === "Supernatural") {
            animeTags.forEach(item => {
                if(item.getAttribute('anime-tag-data') === "supernatural") {
                    selectTag(item)
                }
            });
        } 
        
        if (e.target.innerHTML === "Fantasy") {
            animeTags.forEach(item => {
                if(item.getAttribute('anime-tag-data') === "fantasy") {
                    selectTag(item)
                }
            });
        } 
        
        if (e.target.innerHTML === "Romance") {
            animeTags.forEach(item => {
                if(item.getAttribute('anime-tag-data') === "romance") {
                    selectTag(item)
                }
            });
        } 
        
        if (e.target.innerHTML === "Suspense") {
            animeTags.forEach(item => {
                if(item.getAttribute('anime-tag-data') === "suspense") {
                    selectTag(item)
                }
            });
        } 
        
        if (e.target.innerHTML === "Sci-fi") {
            animeTags.forEach(item => {
                if(item.getAttribute('anime-tag-data') === "sci-fi") {
                    selectTag(item)
                }
            });
        } 
        
        if (e.target.innerHTML === "Slice of Life") {
            animeTags.forEach(item => {
                if(item.getAttribute('anime-tag-data') === "sliceoflife") {
                    selectTag(item)
                }
            });
        }  
        
        if (e.target.innerHTML === "Ecchi") {
            animeTags.forEach(item => {
                if(item.getAttribute('anime-tag-data') === "ecchi") {
                    selectTag(item)
                }
            });
        }  
        
        if (e.target.innerHTML === "Harem") {
            animeTags.forEach(item => {
                if(item.getAttribute('anime-tag-data') === "harem") {
                    selectTag(item)
                }
            });
        }  
        
        if (e.target.innerHTML === "School") {
            animeTags.forEach(item => {
                if(item.getAttribute('anime-tag-data') === "school") {
                    selectTag(item)
                }
            });
        }  
        
        if (e.target.innerHTML === "Isekai") {
            animeTags.forEach(item => {
                if(item.getAttribute('anime-tag-data') === "isekai") {
                    selectTag(item)
                }
            });
        } 
    });
});

function selectTag(item) {
    if(item.classList.contains("select")) {
        item.classList.remove("select");
        item.classList.add("selected");
    } else {
        item.classList.remove("selected");
        item.classList.add("select");
    }
}

submitFormButton.addEventListener("click", (e) => {
    e.preventDefault();

    let name = select("#anime-name").value;
    let altName = select("#alt-anime-name").value;
    /* let thumbnail = select("#anime-thumbnail-input").value; */
    /* let episodes = select("#anime-episodes-input").value; */
    let date = select("#anime-date-input").value;
    let duration = select("#anime-duration-input").value;

    if(name && altName /* && thumbnail */ /* && episodes */ && date && duration) {
        axios.post('http://localhost/sinadb/backend/', {
            "action": "create",
            "name": name,
            "altName": altName,
            /* "thumbnail": thumbnail, */
            /* "episodes": parseInt(episodes), */
            "date": date,
            "duration": parseInt(duration),
        })
        .then(function (response) {
            if(response.data['success']) {
                alert(response.data['message']);                
            } else {
                console.log(response.data['message']);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }
});