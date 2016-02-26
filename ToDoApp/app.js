var listItems = [],
    form = document.querySelector('.form'),
    input = document.querySelector('.input'),
    list = document.querySelector('.list');

function renderItem(item) {
  var li = document.createElement('li');
  li.innerHTML = item;
  list.appendChild(li);
}

function renderAll() {
  list.innerHTML = '';
  for (var i = 0; i < listItems.length; i++) {
    renderItem(listItems[i]);
  }
}

form.onsubmit = function() {  
  listItems.push(input.value);
  renderAll();
  
  input.value = '';
  return false;
};


renderAll();