// important value

function createCard(idOfElement ,data){
  const location = document.getElementById(idOfElement);
  let cardElement = document.createElement("div");
  cardElement.classList.add(          
    "w-full",
    "max-w-sm",
    "bg-white",
    "border",
    "border-gray-200",
    "rounded-lg",
    "shadow",
    "dark:bg-gray-800",
    "dark:border-gray-700",
    "m-8",
  );

  cardElement.innerHTML = `
      <a href="#">
        <img
          class="p-6 rounded-t-lg"
          src="${data["image"]}"
          alt="product image"
        />
      </a>
      <div class="px-5 pb-2">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            ${data["bookNbook-name"]}
          </h5>
        </a>
        </div>
        <div class="px-5 pb-5 ">
        <a href="#">
        <p class="text-sm font-normal tracking-tight text-gray-900 dark:text-white ">
          ${data["Descriptions"]}
        </p>
      </a>
      </div>
      
    `;

  location.appendChild(cardElement);

}





const fromBooks = "books/";
let arrOfObjectForBooks = []

// get data from json file 
async function getDataFromJsonById(id=''){
    const response = await fetch(`http://localhost:3000/books/${id}`);
    const data = await response.json();
    return data;

}


async function limitloopForData(opreation,limit){
  for(let i = 1 ;i<=limit;i++){
    const data =await opreation(i);
    createCard("cate",data);
  }
}




// convert data to arr of obj

function Book (image=undefined,bookName=undefined,rating=undefined,autherName="undefined",descriptions=undefined){
  this.image = image;
  this.bookName = bookName;
  this.rating = rating ;
  this.autherName = autherName;
  this.descriptions = descriptions;
  this.displayData = function(){
      console.log(` image: ${this.image} bookName: ${this.bookName} rating: ${this.rating} autherName: ${this.autherName} descriptions: ${this.descriptions} `);
  }
}





async function main(){
  await limitloopForData(getDataFromJsonById,22);

  // const book = new Book(
  //   data["image"],
  //   data['book-name'],
  //   data['Rating'],
  //   data['auther-name'],
  //   data['Descriptions']
  // );
  // book.displayData()

}

main()

// okdsa {id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…-k75b6cFODdRiI8fgD0kjKhcUbFaWrlcPh1pJMevhpaicG63B', bookName: 'Science Fiction', Rating: 4.6, auther-name: 'Frank Herbert', …}Descriptions: "An epic science fiction novel about a young man named Paul Atreides who is destined to become the leader of a desert planet called Arrakis, the only known source of the spice melange, the most valuable substance in the universe."Rating: 4.6auther-name: "Frank Herbert"bookName: "Science Fiction"id: 1image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTo89ZuXSqrCK-k75b6cFODdRiI8fgD0kjKhcUbFaWrlcPh1pJMevhpaicG63B"[[Prototype]]: Object\










