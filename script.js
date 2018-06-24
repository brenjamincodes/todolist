var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var delbuttons = document.querySelectorAll(".remove-item");
var ul = document.getElementById("list");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("X"));
	deleteBtn.onclick = deleteParentnode;
	li.appendChild(deleteBtn);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function deleteParentnode(event){
	event.target.parentNode.remove();
}
 
ul.addEventListener("click", function(event) {
	event.target.classList.toggle("done");
})

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

