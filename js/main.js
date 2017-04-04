function validateForm(){
  var name = document.getElementById("name");
  var lastName = document.getElementById("lastName");
  var email = document.getElementById("input-email");
  var selectBici = document.getElementById('selectBici');
  var password = document.getElementById("input-password");

  validateName(name);
  validateLastName(lastName);
  validateEmail(email);
  validatePassword(password);
  validateSelect(selectBici);
}

function validateName(name){
  /** Validacion para nombre**/
  if(name.value.length==0 || /^\s+|\s+$/.test(name.value)){
    showToolTip("Debe ingresar su nombre",name); return false;
  }
  for (var i = 1; i< name.value.length ; i++){
    if(!(/[A-ZÑÁÉÍÓÚa-zñáéíóú]/.test(name.value.split("")[i]))){
        showToolTip("Nombre no válido",name);return false;
      }
    }
  if (!(/[^a-z]+([a-z]{1,})/.test(name.value))){
    showToolTip("El nombre debe empezar con mayúscula",name); return false;
    }
  else {
    hiddenToolTip(name);
  }
}

function validateLastName(lastName){
  /** Validacion para apellido**/
  if(lastName.value.length==0 || /^\s+|\s+$/.test(lastName.value)){
    showToolTip("Debe ingresar su nombre",lastName); return false;
  }
  for (var i = 1; i< lastName.value.length ; i++){
    if(!(/[A-ZÑÁÉÍÓÚa-zñáéíóú]/.test(lastName.value.split("")[i]))){
        showToolTip("Nombre no válido",lastName);return false;
      }
    }
  if (!(/[^a-z]+([a-z]{1,})/.test(lastName.value))){
    showToolTip("El nombre debe empezar con mayúscula",lastName); return false;
    }
  else {
    hiddenToolTip(lastName);
  }
}

function validateEmail(email){
  if(email.value.length==0 || /^\s+|\s+$/.test(email.value)){
    showToolTip("Debe ingresar su correo electrónico",email); return false;
  }
  else if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+(\w{2,4})+$/.test(email.value))) {
    showToolTip("Correo no válido. Ejemplo: name@domain.com",email); return false;
  }
  else{
    hiddenToolTip(email);
  }
}

function validatePassword(password){
  if(password.value.length==0 || /^\s+|\s+$/.test(password.value)){
    showToolTip("Debe ingresar su contraseña",password);
  }
  else if (password.value.length<6) {
    showToolTip("Contraseña no válida debe ser mínimo 6 carácteres",password);
  }
  else if(password.value == "123456" || password.value == "098754" || password.value == "password"){
    showToolTip("Contraseña no válida",password);
  }
  else {
    hiddenToolTip(password);
  }
}

function validateSelect(selectBici){
  if(selectBici.value == 0){
    showToolTip("Debes seleccionar un tipo de bici",selectBici);
  }
  else {
    hiddenToolTip(selectBici);
  }
}

function hiddenToolTip(nodoInput){
  var nodoSpan= nodoInput.nextElementSibling;
  nodoSpan.setAttribute("style","display:none");
}

function showToolTip(texto,nodoInput){
    var nodoSpan= nodoInput.nextElementSibling;
    nodoSpan.setAttribute("style","display:block");
    nodoSpan.innerHTML = texto;
}
