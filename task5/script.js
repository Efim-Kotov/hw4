let input = document.querySelector('input');
input.addEventListener('keyup', function(event){
    let duplicate = document.querySelector('#duplicateField');
    duplicate.textContent = event.target.value;
  });
  let button = document.querySelector('button');
  button.addEventListener('click', function(event) {
    event.preventDefault();
    let duplicate = document.querySelector('#duplicateField');
    console.log(input.value);
    input.value = "";
    duplicate.textContent = input.value;
  });
