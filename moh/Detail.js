
// async function getDataFromJson(){

//     const response = await fetch('http://localhost:3000/books');
//     const data = await response.json();
//     return data;

// }

//  var data =  getDataFromJson()
//  console.log(data);




function getDataFromJson(id="")

{
    fetch(`http://localhost:3000/books/${id}`).then(res => res.json()).then(data =>
   {
    var issa = document.getElementById("section")
    

          let moh = document.createElement("div")
          moh.innerHTML=`
          <!-- Description Book -->
        <div class="description">
        <h5
        class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-1xl h1"
      >
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 span"
          >${data['bookname']}</span
        >
      </h5>
          <br>
            <p class="nameauther1">${data['authername']}</p><br>
            <p class= "descr">${data['Descriptions']}</p><br><br>
            <hr>
        </div>
            <!-- /Description Book -->
        
        
        
            <!------- Author------>
        <div class="author">
        <h5
        class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-1xl h1"
      >
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 span"
          >About the author</span
        >
      </h5>
            <br>
            <div class ="auth">
            <img src="${data['imgauther']}" alt="" class="imgauthor"><br><br>
            
            <p class="nameauther2">${data['authername']}</p><br>
            
            </div><br>
            <p>${data['Descriptions']}</p><br>
            <br>
        </div><hr>
            <!------- /Author------>
            
            <!------- Related------>

      <div class="related">
      <h5
          class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-1xl h1"
        >
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 span"
            >Related</span
          >
        </h5>
      <br>
      <main class="page-content">
    <div class="card">
      <div class="content">
      <img src="https://www.bookbrowse.com/images/reviewers/ahima_lisa.jpg" alt="" class="imgauthor">
        <h2 class="title">Lisa Ahima</h2>
        <p class="copy">When a father goes missing, his family's desperate search leads them to question everything </p>
        <span class="fa fa-star checked"> 4.7</span>
      </div>
    </div>
    <div class="card">
      <div class="content">
      <img src="https://www.bookbrowse.com/images/reviewers/pfeiffer_chloe.jpg" alt="" class="imgauthor">
        <h2 class="title">Chloe Pfeiffer</h2>
        <p class="copy">The New York Times best-selling author of The Nix is back with a poignant and witty novel about marriage</p>
        <span class="fa fa-star checked"> 3.9</span>
      </div>
    </div>
    <div class="card">
      <div class="content">
      <img src="https://www.bookbrowse.com/images/reviewers/cook_elisabeth.jpg" alt="" class="imgauthor">
        <h2 class="title">Elisabeth Cook</h2>
        <p class="copy">A thrilling debut novel for fans of Liane Moriarty and Celeste Ng about how far we'll go to protect</p>
        <span class="fa fa-star checked"> 4.6</span>
      </div>
    </div>
    <div class="card">
      <div class="content">
      <img src="https://www.bookbrowse.com/images/reviewers/cumbow_glory.jpg" alt="" class="imgauthor">
        <h2 class="title">Glory Cumbow</h2>
        <p class="copy">A stranded detective tries to solve a murder in a tiny Alaskan town where everyone lives</p>
        <span class="fa fa-star checked"> 4.1</span>
      </div>
    </div>
  </main>
      
      <br>
      
      </div>
      <hr> 

    <!------- /Related------>
    
    <!------- Reviews------>

   <div class="reviews">
   <h5
   class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-1xl h1"
 >
   <span
     class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 span"
     >Reviews & Ratings</span
   >
 </h5>
   <br>

   
   <div class="revstar">
   <div>
<span class="fa fa-star checked ">  ${data['Rating']} </span>
</div>
<br>
<div>


    <!------- Reviews------>`

            issa.appendChild(moh)


        
            
            
        
      
var loc = document.getElementById("main")
loc.innerHTML=` <div id="fixedImage">
  <div class="mainbook">
  <img src="${data['image']}" alt="" class="imgbook">
      <form >
          <ul>
              <li> <button class="sub">Download</button></li>
              <li> <button class="sub1">Read Now</button></li>
              
          </ul>
      </form>
      
  </div>

</div>`  
          
document.getElementById('a').style.backgroundImage="url(images/img.jpg)";  
    });
   } 

   





        
            
            
        
        
          
        








function issa(limit) {
    for (let i = 1; i <= limit; i++) {
        getDataFromJson(i)
    }
  }

  issa(1)
