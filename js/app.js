// cached element references:
const taskInp = document.getElementById('task')
const submitBtn = document.getElementById('submit-button')
const resetBtn = document.getElementById('reset-button')
const listUl = document.getElementById('todo-list')

submitBtn.addEventListener('click', handleAddBtnClick)
resetBtn.addEventListener('click', handleResetBtnClick)
listUl.addEventListener('click', strikeThru)


function handleAddBtnClick(e){
  const li = document.createElement('li')
  li.textContent = taskInp.value
  if (taskInp.value !== ''){
    document.querySelector('ul').appendChild(li)  // this adds the li to the <ul>
    taskInp.value = '' // clears out the inp field
  }else{
    alert('Please enter a task!')
  }
}

function strikeThru(e){
  (e.target).style.textDecoration = 'line-through'
}

function handleResetBtnClick(e){
  listUl.textContent = ''
}
