window.addEventListener('load', init);

//Globals
let apiUrl = './webservice';
let gallery;
let characterData ={}
let charactersDetails ={}
let detailModal ;
let detailModalContent ;
let detailModalCloseButton ;
let favorite = 'null'


/**
 * Initialize after the DOM is ready
 */
function init() {
    gallery = document.getElementById('starwars-gallery');
    getCharacter();

    gallery.addEventListener('click', characterClickHandler);
    getCharacterTags()
    //start the application with loading the API data
    ajaxRequest(apiUrl, createCharacter);

    //retrieve modal elements
    detailModal = document.getElementById('starwars-detail');
    detailModalContent = detailModal.querySelector('.modal-content');
    detailModalCloseButton = detailModal.querySelector('.modal-close');
    detailModalCloseButton.addEventListener('click', detailModalCloseHandler);



}

function ajaxRequest (url,succesHandler)
{
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(succesHandler)
        .catch(ajaxErrorHandler);
}

function getCharacter() {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(createCharacter)
        .catch(ajaxErrorHandler);
}


 function getCharacterTags()
 {
     fetch('webservice/includes/?id')
         .then((response) => {
             if (!response.ok) {
                 throw new Error(response.statusText);
             }
             return response.json();
         })
        .then(characterClickHandler)
         .catch(ajaxErrorHandler);
}



function createCharacter(data) {
    for (let character of data) {
        let characterCard= document.createElement('div');
        characterCard.classList.add('character-card');
        characterCard.dataset.name = character.name;

        //append cards to html
        gallery.appendChild(characterCard);

        




          let title = document.createElement('h2');
          title.innerHTML = `${character.name} `;
          characterCard.appendChild(title);

          let image = document.createElement('img');
          image.src = character.img;
          characterCard.appendChild(image);

          let  detail_button = document.createElement('button');
          detail_button.innerHTML = 'show powers';
         detail_button.dataset.id = character.id;
         characterCard.appendChild(detail_button);

          let favorite_button = document.createElement('button');
          favorite_button.innerHTML = 'favorite';
          characterCard.appendChild(favorite_button);

        //store the pokemon information globally
        characterData[character.id] = character;


    }
}


function ajaxErrorHandler(data)
{
    let error = document.createElement('div');
    error.classList.add('error');
    error.innerHTML = 'Shit man mijn API doet het gwn niet sorry probeer later nog een keer';
    gallery.before(error);

}


function characterClickHandler (e) {
    console.log(e);

    let clickedItem = e.target;

    //check if button is clicked
    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }


    //get information from global data
    let character = characterData[clickedItem.dataset.id];



    detailModalContent.innerHTML = '';

    //show title with the name & id
    let title = document.createElement('h1');
    title.innerHTML = `${character.name} `;
    detailModalContent.appendChild(title);

    //display the shiny version
    let shiny = document.createElement('img');
    shiny.src = character.img;
    detailModalContent.appendChild(shiny);

    //display the tags
    let tags = document.createElement('p')
    tags.innerHTML = `${character.$id}`;
    detailModalContent.appendChild(tags);


    //open the modal
    detailModal.classList.add('open');
}

//close the modal
        function detailModalCloseHandler(e) {
            detailModal.classList.remove('open');
}

// function fillFieldsFromLocalStorage()
// {
//     if (localStorage.getItem('id') !== null) {
//         $character.id = localStorage.getItem('id');
//     }
// }
//
// function submitHandler(e)
// {
//     e.preventDefault();
//     localStorage.setItem('id', $character.id);
//
// }