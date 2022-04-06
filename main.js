// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
*document.querySelector(".like").addEventListener("click", mimicServerCall)
const modal = document.querySelector(".hidden")
setTimeout( function () {
   alert("error");
}, 3000);


const likes = document.querySelectorAll(".like-glyph")
for (const like of likes){
  like.addEventListener('click', likesCallBack)
}

function likesCallBack () {
  mimicServerCall().then(function(response){
    console.log(response)
  })
  .catch(function (error){
   
    console.log(error)
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
