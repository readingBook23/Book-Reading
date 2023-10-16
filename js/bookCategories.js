// important value
function Book (id=undefined,image=undefined,bookName=undefined,rating=undefined,autherName="undefined",descriptions=undefined){
  this.id = id;
  this.image = image;
  this.bookName = bookName;
  this.rating = rating ;
  this.autherName = autherName;
  this.descriptions = descriptions;
  this.displayData = function(){
      console.log(` image: ${this.image} bookName: ${this.bookName} rating: ${this.rating} autherName: ${this.autherName} descriptions: ${this.descriptions} `);
  }
}


function createCard(idOfElement ,data=undefined){
  const location = document.getElementById(idOfElement);
  let cardElement = document.createElement("div");
  cardElement.classList.add( 
    "center"         
  );
  cardElement.innerHTML = `
  <div class="property-card">
    <a href="#">
      <div class="property-image" style="  background-image:url('${data["image"]}');">
        <div class="property-image-title">
          <!-- Optional <h5>${data["book-name"]}</h5> If you want it, turn on the CSS also. -->
        </div>
      </div></a>
    <div class="property-description">
      <h5>${data["book-name"]}e </h5>
      <p>${data["Descriptions"]}</p>
    </div>
    <a href="#">
      <div class="property-social-icons">
        <!-- I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions -->
      </div>
    </a>
  </div>
    `;            
  location.appendChild(cardElement);
}


const fromBooks = "books/";
let arrOfObjectForBooks = {};

// get data from json file 
async function getDataFromJsonById(id=''){
    const response = await fetch(`http://localhost:3000/books/${id}`);
    const data = await response.json();
    return data;
}

// async function limitloopForData(opreation,limit,value){
//   for(let i = 1 ;i<=limit;i++){
//     const data = await opreation(i);
//       await createCard("cards",data);
    
//   }
// }


// convert data to arr of obj
 async function convertDataForObject(){
  let data,book
  for(let i = 1 ;i< 25;i++){
     data = await getDataFromJsonById(i);
     book = new Book(  
      i,
      data["image"],
      data['book-name'],
      data['Rating'],
      data['auther-name'],
      data['Descriptions']
    );
    arrOfObjectForBooks[i] = book;
    // book.displayData()
    }
    return arrOfObjectForBooks;
  }

  function displayDataAfterFilter(arr = []){
    let counter = 0;  
    if(arr.length == 0){
        console.log("ther an something wrong");
      }
      //from zero because I am loop on index not id  
      for(let i  = 0 ;i<arr ; i++){
      if(selectedGenre == "empty" || arr[i]."the name json" == selectedGenre){
        counter +=1;
        createCard("cards",arr[i])
      }
      if(selectedAgeGroup == "empty" || arr[i]."the name json" == selectedAgeGroup){
        counter +=1;
        createCard("cards",arr[i])
      }
      if(selectedLanguage == "empty" || arr[i]."the name json" == selectedLanguage){
        counter +=1;
        createCard("cards",arr[i])
      }

      }
      return counter;
}


  async function main(){
    const arr =await convertDataForObject();
  
  
  }



// categories edit 
let selectedGenre= "empty";
let selectedAgeGroup ="empty"
let selectedLanguage ="empty"

const genreSelect = document.getElementById('genre');
genreSelect.addEventListener("change", (e) => {
  selectedGenre = e.target.value;
  console.log(selectedGenre)

});


  const ageGroupSelect = document.getElementById('ageGroup');
  ageGroupSelect.addEventListener("change", (e) => {
  selectedAgeGroup = e.target.value;
  console.log(selectedAgeGroup)

});

const languageSelect = document.getElementById('language');
languageSelect.addEventListener("change", (e) => {
  selectedLanguage = e.target.value;
  console.log(selectedLanguage)

});
//categories edit 




main()


