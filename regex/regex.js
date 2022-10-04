function validar() {
  let exp = /\d{10}/;
  //    let exp = /^([0-9]{2,3})([\s.-]?)([0-9]{3,4})([\s.-]?)([0-9]{4})$/
  //    https://regex101.com/
  let tel = document.querySelector("#telefono").value;
  if (exp.test(tel)) {
    alert("Tu telefono esta correcto");
  } else {
    alert("Tu telefono debe ser de 10 dígitos");
    return;
  }

  let exp2 = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  let email = document.querySelector("#email").value;

  if (exp2.test(email)) {
    alert("Tu email esta correcto");
  } else {
    alert("Tu email esta incorrecto");
    return;
  }
}

document.querySelector("button").addEventListener("click", validar);
