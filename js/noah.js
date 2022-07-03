window.addEventListener('load', init);

//global vars
let fetchLocation = 'webservice/index.php';

function init()
{
    ajaxRequest(fetchLocation, createVideocard);
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
        .catch(ajaxErrorHandler);
}


function createVideocard(data) {

    // get the video card element in index.html


    let videocardInfo = document.getElementById('videocardInsert');

    // for loop that takes 1 videocard out of the json file

    for (let videocard of data) {

        let div = document.createElement("div");
        div.classList.add("videocardInfo");

        // make a div that creates the videocard name

        let classNameDiv = document.createElement("div")
        classNameDiv.classList.add("videocardName");

        //check if the videocard is set af favorite
        // if so add the class favoriteVC


        if (videocard.videocardName === localStorage.getItem(`favorite${videocard.id}`)){
            classNameDiv.classList.add("favoriteVC");
        } else {
            classNameDiv.classList.remove("favoriteVC");
        }

        // H2 for the name of the videocard


        let h2 = document.createElement("h2");
        h2.innerHTML = videocard.videocardName;

        classNameDiv.appendChild(h2);
        div.appendChild(classNameDiv);

        // Get the image out of the images folder

        let img = document.createElement("img");
        img.src = `images/${videocard.videocardImage}`;
        div.appendChild(img);

        //Button to add the videocard to favorites


        let favoriteButton = document.createElement('button');
        favoriteButton.classList.add("buttonClass");
        favoriteButton.id = "favoriteVCTest";
        let inStorage;


        // This this check if the right text should show and if you have to remove or add to favorites.



        if (videocard.videocardName === localStorage.getItem(`favorite${videocard.id}`)){
            favoriteButton.innerHTML = 'Remove from favorites';
            inStorage = true;
        } else {
            favoriteButton.innerHTML = "Add to favorites";
            inStorage = false
        }


        // This wil add or delete the favorite from local storage

        // also this wil add the favoriteVC class to show the heart icon in css


        favoriteButton.addEventListener("click", () => {

            if (inStorage === false) {
                localStorage.setItem(`favorite${videocard.id}`, `${videocard.videocardName}`);
                favoriteButton.innerHTML = "Remove from favorites";
                classNameDiv.classList.add("favoriteVC");
                inStorage = true;
            } else {
                localStorage.removeItem(`favorite${videocard.id}`)
                favoriteButton.innerHTML = "Add to favorites";
                classNameDiv.classList.remove("favoriteVC");
                inStorage = false;
            }
        });

        div.appendChild(favoriteButton);

        // Detail button for the videocards

        let detailsButton = document.createElement("button");
        detailsButton.classList.add("buttonClass");
        detailsButton.innerHTML = "Show details";

        detailsButton.addEventListener("click",  () => {
            ajaxRequest(`${fetchLocation}?id=${videocard.id}`, showDetails);

        });

        div.appendChild(detailsButton);

        videocardInfo.appendChild(div);
    }

}

/**
 *
 * @param videocard
 */

function showDetails(videocard) {
    // Get the div where the de details need to be inserted to.

    let videocardDetails = document.getElementById("videocardDetailInsert");

    //empty the div

    videocardDetails.innerHTML = '';
    videocardDetails.style.display = "block";

    // Makes a H2
    let videocardName = document.createElement("div")
    videocardName.classList.add("videocardName");

    let videocardNameH2 = document.createElement("h2");
    videocardNameH2.innerHTML = videocard.videocardName + ' Details:';
    videocardName.appendChild(videocardNameH2);

    videocardDetails.appendChild(videocardName);




    //Get the description of the videocard


    let descriptionDivSet = document.createElement("div");
    descriptionDivSet.innerHTML = '<br>' + videocard.description;
    videocardDetails.appendChild(descriptionDivSet);


    //Button to close the details window

    let closeDetails = document.createElement("button")
    closeDetails.classList.add("buttonClass");
    closeDetails.addEventListener("click", () => {
        videocardDetails.style.display = "none";
    });
    closeDetails.innerHTML = "close details";
    videocardDetails.appendChild(closeDetails);
}


function test(divName, item, videocard, specification) {
    divName = document.createElement("div");
    divName.innerHTML = `<b>${item}</b>`;

    window[divName + "Div"] = document.createElement("div");
    window[divName + "Div"].classList.add("textToRight");
    window[divName + "Div"].innerHTML = videocard[specification];
    divName.appendChild(window[divName + "Div"]);
    return divName;
}



function ajaxErrorHandler(data){
    console.log(data);
}