var btn = document.getElementById('addSkills');
console.log(btn);

var addInput = document.getElementById('inputSkills');
console.log(addInput);

var listContainer = document.getElementById('listContainer');
console.log('list skills, listContainer');

//var tabSkills = [];
var removeButtons = document.getElementsByName('remove');
console.log('salut ' + removeButtons);
btn.addEventListener('click', function(){
//console.log(addInput.value);
//tabSkills.push(addInput.value);
//console.log('le tableau : ' + tabSkills);

var li = document.createElement('li');
li.innerHTML= '<button type="button" onclick="remove(this)"> <name="remove"><i class = "fa fa-trash" aria-hidden="true"></i></button>';
li.innerHTML = li.innerHTML + addInput.value;
console.log('liste', li);
listContainer.appendChild (li);
console.log('this is my button:', removeButtons);
});

function remove(param){
  console.log('this: ', param);
  this.parentElement.
}
