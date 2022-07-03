window.addEventListener('load', init);

let apiUrl = "./webservices";
let dishCard;
let vacationData = {};
let gallery;


function init() {
    ajaxRequest(apiUrl, makeDataCard)
}

const ajaxRequest = (url, func) => {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(func)
        .catch();
}


function makeDataCard(data) {

    for (let card of data) {

        let gallery = document.getElementById('new-gallery');
        let vacationCard = document.createElement('div');
        vacationCard.classList.add('vacation-card');
        vacationCard.dataset.id = card.id;

        gallery.appendChild(vacationCard);

        let locations = document.createElement('h2')
        locations.innerHTML = `${card.location}`;
        vacationCard.appendChild(locations)

        let number = document.createElement('h3')
        number.innerHTML = `${card.number}`;
        vacationCard.appendChild(number);

        let image = document.createElement('img');
        image.src = card.image;
        image.classList.add('image');
        vacationCard.appendChild(image);

        let button = document.createElement('button');
        button.classList.add('btn');
        button.innerHTML = 'Meer details';
        button.dataset.id = card.id;

        button.addEventListener('click', () => {
            ajaxRequest(`${apiUrl}?id=${card.id}`, showDetails)
        });

        vacationCard.appendChild(button)
        vacationData[card.id] = card;
    }
}

// CODE NOAH

/**
 *
 * @param card
 */

function showDetails(card) {

    //Get div for details
    let showCardDetails = document.getElementById('detail-container');

    //create empty details div
    showCardDetails.innerHTML = '';
    showCardDetails.classList.add('open');

    //fill details card with location
    let locations = document.createElement('h1');
    locations.innerHTML = `${card.location}`;
    showCardDetails.appendChild(locations);

    //make button to close details
    // let closeDetails = document.createElement('button')
    // closeDetails.classList.add('buttonClose')
    // closeDetails.addEventListener('click', () => {
    //     showCardDetails.style.visibility = 'visible'
    // })

    // closeDetails.innerHTML = 'close'
    // showCardDetails.appendChild(closeDetails)

    //CLOSE DETAILS

    // let closeButton = document.getElementById('detail-close')
    // console.log(closeButton)
    // closeButton.addEventListener('click', () => {
    //     showCardDetails.style.visibility = 'none'
    // })

    // closeDetails.innerHTML = 'X'
    // showCardDetails.appendChild(closeButton)

}


// function clickHandler(e){

//     let clickedItem = e.target

//     if (clickedItem.nodeName !== 'BUTTON'){
//         return
//     }

//     let vacation = vacationData[clickedItem.dataset.id]

//     detailContent.innerHTML = '';

//     let locations = document.createElement('h1')
//     locations.innerHTML = `${vacation.location}`;
//     detailContent.appendChild(locations)

//     let image = document.createElement('img');
//     image.src = vacation.image;
//     image.classList.add('image');
//     detailContent.appendChild(image);

//     detailContainer.classList.add('open')
// }


// function detailCloseHandler(e){
//     detailContainer.classList.remove('open')
// }



// ajaxErrorHandler(data)
// {
//     console.log('something went wrong')
//     console.log(data)
// }




