let bodySelector = document.querySelector("body");
let sectionCreation;
let asideCreation;
let imgCreation;
let buttonSelector;
let articleCreation;
let pIntegrate;


fetch('https://picsum.photos/v2/list?limit=4')
  .then((response) => {
    return response.json()
  })
  .then((photos) => {
    photos.forEach(photo => {
      createElements();
      fillElements(photo.download_url,photo.author);
      appendElements();
    });
  })


function createElements() {
   asideCreation = document.createElement("aside");
   imgCreation = document.createElement("img");
   articleCreation = document.createElement("article");
   pIntegrate = document.createElement("p");
   buttonSelector = document.createElement("button");
   
}

function fillElements(photoUrl,photoAuthor) {
  console.log("hello");
  imgCreation.src = photoUrl;
  pIntegrate.textContent=photoAuthor;
  buttonSelector.textContent = "Visit";
  
}

function appendElements() {
  asideCreation.append(pIntegrate);
  bodySelector.append(articleCreation);
  articleCreation.append(asideCreation);
  asideCreation.append(buttonSelector);
  articleCreation.append(imgCreation);

}

