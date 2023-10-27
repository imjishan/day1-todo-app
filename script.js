const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById("list-container");
function addTask(){
     if (inputBox.value === '') {
          alert("Please enter your task")
     } else {
          let li = document.createElement('li');
          li.innerText = inputBox.value;
          listContainer.appendChild(li);
          let span = document.createElement('span');
          span.innerHTML = "\u00d7";
          li.appendChild(span);
     }
     inputBox.value = '';
     saveData();
}

listContainer.addEventListener('click', (e) => {
     // and when I click on the cross, then the task should be removed from the list.
     // when I click on the text, then the text should be text-decoration: line-through;


     if (e.target.tagName === 'LI') {
          e.target.classList.toggle('checked');
     } else if (e.target.tagName === 'SPAN') {
          e.target.parentElement.remove();
     }
})

function saveData(){
     localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
     listContainer.innerHTML = localStorage.getItem('data');
}

showTask();


// end of javascript