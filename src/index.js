window.addEventListener("load", function(event){
    let imgContainer = document.querySelector("#dog-image-container");
    
    // load 4 images on the page 
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(function(response){
            return response.json();
        })
        .then(function(dogImages){
            dogImages.message.forEach(function(el) {
                imgContainer.innerHTML += `<div><img src=${el}></div>`;
            })
    });

    // add each breed name as an li
    let dogBreedList = document.querySelector("#dog-breeds");
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(function(response){
            return response.json();
        })
        .then(function(breedData){
            let keys = Object.keys(breedData.message);
            keys.forEach(function(el){
                dogBreedList.innerHTML += `<li>${el}</li>`;
            })
        })

    // change color of breed name font if clicked
    let list = document.querySelector("ul");
    list.addEventListener("click", function(event) {
            event.target.style.color = "magenta";
    })

    // filter breed list by dropdown letter
    let dropdown = document.querySelector("#breed-dropdown");
    dropdown.addEventListener("change", function(event){
        dropdown = document.querySelector("#breed-dropdown");
        let listItems = Array.from(document.querySelectorAll("li"));
        let dogBreedList = document.querySelector("#dog-breeds")
        let breeds = [];
        listItems.filter(function(el) {
            if (el.innerText[0] === dropdown.value) {
                breeds.push(el.innerText)
            }
        })
        dogBreedList.innerHTML = "";
        breeds.forEach(function(el){
            dogBreedList.innerHTML += `<li>${el}</li>`;
        })
    })


});
