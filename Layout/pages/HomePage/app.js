// fetch("http://localhost:3000/books")
//   .then((res) => res.json())
//   .then((data) =>
//     data.forEach((datas) => {
//       let newproducts = new Product(
//         datas.image,
//         datas.bookname,
//         datas.authername,
//         datas.Descriptions
//       );

//       let cardssss = document.getElementById("cardssss");

//       cardssss.innerHTML = `

//         <div
//         class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
//       >
//         <a href="#">
//           <img
//             class="p-8 rounded-t-lg"
//             src="${datas.image}"
//             alt="product image"
//           />
//         </a>
//         <div class="px-5 pb-5">
//           <a href="#">
//             <h5
//               class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
//             >
//             ${datas.bookname}
//             </h5>
//           </a>
//         </div>
//       </div>
//       `;

//       let cate = document.getElementById("cate");

//       cate.insertAdjacentHTML("beforeend", cardssss);
//       console.log(datas);
//     })
//   );

// class Product {
//   constructor(image, bookname, authername, Descriptions) {
//     this.image = image;
//     this.bookname = bookname;
//     this.authername = authername;
//     this.Descriptions = Descriptions;
//   }
// }
function get(id = " ") {
  fetch(`http://localhost:3000/books/${id}`)
    .then((res) => res.json())
    .then((data) => {
      let cate = document.getElementById("categorys");

      let cardElement = document.createElement("div");
      // cardElement.classList.add(
      //   "w-full",
      //   "max-w-sm",
      //   "bg-white",
      //   "border",
      //   "border-gray-200",
      //   "rounded-lg",
      //   "shadow",
      //   "dark:bg-gray-800",
      //   "dark:border-gray-700",
      //   "issa"
      // );

      cardElement.innerHTML = `
           
          <section class="card-section">
          <div class="card">
              <div class="flip-card">
                  <div class="flip-card__container">
                      <div class="card-front">
                          <div class="card-front__tp card-front__tp--city">
                              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                              viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve" class="card-front__icon">
                         <g>
                             <path d="M49.7,22c-1.1,0-2,0.9-2,2v32.2c0,1.1,0.9,2,2,2s2-0.9,2-2V24C51.7,22.9,50.8,22,49.7,22z"/>
                             <path d="M13,29.5c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3h20.8c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3h20.8c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7
                                 V7.1h24.8v15.3c0,1.1,0.9,2,2,2s2-0.9,2-2V5.1c0-1.1-0.9-2-2-2H3.7c-1.1,0-2,0.9-2,2v51c0,1.1,0.9,2,2,2s2-0.9,2-2V36.5H13
                                 c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3H13z"/>
                             <path d="M58,11.9c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0
                                 c0-0.1-0.1-0.1-0.1-0.2c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.2-0.1
                                 c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.2,0c0,0,0,0,0,0
                                 c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0-0.1,0.1l-12.6,7.8
                                 c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2
                                 c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0v5.4H22.1
                                 c-1.1,0-2,0.9-2,2v28.9c0,1.1,0.9,2,2,2s2-0.9,2-2V29.3h17.3v26.9c0,1.1,0.9,2,2,2s2-0.9,2-2V21l8.6-5.3v40.5c0,1.1,0.9,2,2,2
                                 s2-0.9,2-2V12.1C58,12,58,12,58,11.9z"/>
                             <path d="M28,31L28,31c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S29.1,31,28,31z"/>
                             <path d="M33.5,31L33.5,31c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S34.6,31,33.5,31z"/>
                             <path d="M28,36L28,36c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S29.1,36,28,36z"/>
                             <path d="M33.5,36L33.5,36c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S34.6,36,33.5,36z"/>
                         </g>
                         </svg>

                         <h2 class="card-front__heading">
                          ${data["bookname"]}
                      </h2>
                      <p class="card-front__text-price">
                          ${data["authername"]}
                      </p>
                          </div>

                          <div class="card-front__bt">
                              <p class="card-front__text-view card-front__text-view--city">
                                  View me
                              </p>
                          </div>
                      </div>
                      <div class="card-back">
                          <video class="video__container" autoplay muted loop>
                              <source class="video__media" src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761" type="video/mp4">
                          </video>
                      </div>
                  </div>
              </div>

              <div class="inside-page">
                  <div class="inside-page__container">
                      <h3 class="inside-page__heading inside-page__heading--city">
                         ${data["bookname"]}
                      </h3>
                      <p class="inside-page__text">
                        ${data["Descriptions"]}
                      </p>
                      <a href="#" class="inside-page__btn inside-page__btn--city">View deals</a>
                  </div>
              </div>
          </div>
      </section>

            `;

      cate.appendChild(cardElement);
    });
}

function issa(limit) {
  for (let i = 1; i <= limit; i++) {
    get(i);
    get2(i);
  }
}

issa(3);

function get2(id = " ") {
  // let limits = 3;
  fetch(`http://localhost:3000/books/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let main = document.getElementById("main");

      let cardElement = document.createElement("div");
      // cardElement.classList.add(
      //   "w-full",
      //   "max-w-sm",
      //   "bg-white",
      //   "border",
      //   "border-gray-200",
      //   "rounded-lg",
      //   "shadow",
      //   "dark:bg-gray-800",
      //   "dark:border-gray-700",
      //   "ratings"
      // );

      cardElement.innerHTML = `
            
              
        <section class="card-section">
        <div class="card">
            <div class="flip-card">
                <div class="flip-card__container">
                    <div class="card-front">
                        <div class="card-front__tp card-front__tp--city">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve" class="card-front__icon">
                       <g>
                           <path d="M49.7,22c-1.1,0-2,0.9-2,2v32.2c0,1.1,0.9,2,2,2s2-0.9,2-2V24C51.7,22.9,50.8,22,49.7,22z"/>
                           <path d="M13,29.5c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3h20.8c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3h20.8c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7
                               V7.1h24.8v15.3c0,1.1,0.9,2,2,2s2-0.9,2-2V5.1c0-1.1-0.9-2-2-2H3.7c-1.1,0-2,0.9-2,2v51c0,1.1,0.9,2,2,2s2-0.9,2-2V36.5H13
                               c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3H13z"/>
                           <path d="M58,11.9c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0
                               c0-0.1-0.1-0.1-0.1-0.2c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.2-0.1
                               c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.2,0c0,0,0,0,0,0
                               c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0-0.1,0.1l-12.6,7.8
                               c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2
                               c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0v5.4H22.1
                               c-1.1,0-2,0.9-2,2v28.9c0,1.1,0.9,2,2,2s2-0.9,2-2V29.3h17.3v26.9c0,1.1,0.9,2,2,2s2-0.9,2-2V21l8.6-5.3v40.5c0,1.1,0.9,2,2,2
                               s2-0.9,2-2V12.1C58,12,58,12,58,11.9z"/>
                           <path d="M28,31L28,31c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S29.1,31,28,31z"/>
                           <path d="M33.5,31L33.5,31c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S34.6,31,33.5,31z"/>
                           <path d="M28,36L28,36c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S29.1,36,28,36z"/>
                           <path d="M33.5,36L33.5,36c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S34.6,36,33.5,36z"/>
                       </g>
                       </svg>

                       <h2 class="card-front__heading">
                        ${data["bookname"]}
                    </h2>
                    <p class="card-front__text-price">
                        ${data["authername"]}
                    </p>
                        </div>

                        <div class="card-front__bt">
                            <p class="card-front__text-view card-front__text-view--city">
                                View me
                            </p>
                        </div>
                    </div>
                    <div class="card-back">
                        <video class="video__container" autoplay muted loop>
                            <source class="video__media" src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761" type="video/mp4">
                        </video>
                    </div>
                </div>
            </div>

            <div class="inside-page">
                <div class="inside-page__container">
                    <h3 class="inside-page__heading inside-page__heading--city">
                       ${data["bookname"]}
                    </h3>
                    <p class="inside-page__text">
                      ${data["Descriptions"]}
                    </p>
                    <a href="#" class="inside-page__btn inside-page__btn--city">View deals</a>
                </div>
            </div>
        </div>
    </section>
                    
                  `;

      main.appendChild(cardElement);
    });
}

// function vv(data){
//   if(data.Rating > 3){

//   }
// }

{
  /* <svg
class="w-4 h-4 text-yellow-300 mr-1"
aria-hidden="true"
xmlns="http://www.w3.org/2000/svg"
fill="currentColor"
viewBox="0 0 22 20"
>
<path
  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
/>
</svg> */
}

function wish(data) {
  console.log(data);
}
