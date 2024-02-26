
var stars = document.getElementsByClassName("fas");
var emoji = document.getElementById("emoji");

stars[0].onclick = function(){
    emoji.style.transform = "translateX(0)";
}

stars[1].onclick = function(){
    emoji.style.transform = "translateX(-100px)";
}

stars[2].onclick = function(){
    emoji.style.transform = "translateX(-200px)";
}

stars[3].onclick = function(){
    emoji.style.transform = "translateX(-300px)";
}

stars[4].onclick = function(){
    emoji.style.transform = "translateX(-400px)";
}

stars[5].onclick = function(){
    emoji.style.transform = "translateX(-500px)";
}

stars[6].onclick = function(){
    emoji.style.transform = "translateX(-600px)";
}

stars[7].onclick = function(){
    emoji.style.transform = "translateX(-700px)";
}

stars[8].onclick = function(){
    emoji.style.transform = "translateX(-800px)";
}

stars[9].onclick = function(){
    emoji.style.transform = "translateX(-900px)";
}


var form = document.getElementById('form');
var options = document.getElementsByName('rating');
var error = document.getElementById('uncheck');
var textarea = document.forms['form']['comment'];
var textarea_error = document.getElementById('texterror');
var select = document.forms['form']['selector'];
var select_error = document.getElementById('selecterror');
var choice = document.forms['form']['choice'];
var choice_error = document.getElementById('choice_error');
var submit = document.getElementById('submit');

form.addEventListener('click', check);
textarea.addEventListener('input', text_check);
select.addEventListener('change', select_check);
choice.addEventListener('change', choice_check);
submit.addEventListener('click', validateProceed);

function validated() {
  var valid = true;

  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      valid = true;
      break;
    } else {
      valid = false;
    }
  }

  if (!valid) {
    error.style.display = 'block';
    return false;
  } else {
    error.style.display = 'none';
  }

  if (!textarea.value.length > 0) {
    textarea_error.style.display = 'block';
    return false;
  } else {
    textarea_error.style.display = 'none';
  }

  if (select.value == '') {
    select_error.style.display = 'block';
    return false;
  } else {
    select_error.style.display = 'none';
  }

  if (choice.value == '') {
    choice_error.style.display = 'block';
    return false;
  } else {
    choice_error.style.display = 'none';
  }

  return true;
}

function check() {
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      error.style.display = 'none';
      return true;
    }
  }
}

function text_check() {
  if (textarea.value.length > 0) {
    textarea_error.style.display = 'none';
    return true;
  }
}

function select_check() {
  if (select.value !== '') {
    select_error.style.display = 'none';
    return true;
  }
}

function choice_check() {
  if (choice.value !== '') {
    choice_error.style.display = 'none';
    return true;
  }
}

function validateProceed() {
  if (validated()) {
    swal("Thank you!", "Your Feedback has successfully Submited", "success");
    return true;
  }
    return false;
}

