console.log("Hello cards");

//Initializing the variables

var btn = document.getElementById("submit");

var textArea = document.getElementById("message");

var myoutput= document.getElementById("myoutput");

//added Eventlistener to the button

btn.addEventListener("click", addCard);

//Writing funtion to create a card

function addCard(event){
var newC =`<div class="card">${textArea.value}<button class="del">Delete</button></div>`;
	myoutput.innerHTML += newC;

	console.log(newC);


var delbtn = document.getElementsByClassName("del");

//running a for loop to identify which button was clicked

				for(var i=0; i< delbtn.length; i++){
					delbtn[i].addEventListener("click", function(){
						console.log("this:",this)
		console.log("event:", event);


//remove the parentnode containing inner html and button
						this.parentNode.remove()
					});
				}

}





