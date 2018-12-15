const list = document.querySelector('#book-list ul');

//delete

list.addEventListener('click',function(e){
  if(e.target.className == 'delete'){
      const li=e.target.parentElement;
      list.removeChild(li);}})

//forms
const addform = document.forms['add-book'];
addform.addEventListener('submit',function(e){
  e.preventDefault();
const value = addform.querySelector('input[type="text"]').value;

//add elements

const li = document.createElement('li');
const bookname = document.createElement('span');
const deleteBtn = document.createElement('span');

//adding content
deleteBtn.textContent='delete';
bookname.textContent=value;

//adding classes to the tags
bookname.classList.add('name');           //bookname.className + = ' name';
deleteBtn.classList.add('delete');


//appending
li.appendChild(bookname);
li.appendChild(deleteBtn);
list.appendChild(li);
});

const hide = document.querySelector('#hide');
hide.addEventListener('change',function(e){
  if(hide.checked){
    list.style.display = "none";
  }else{
    list.style.display='block';
  }

})
