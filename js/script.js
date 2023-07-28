

var inputName = document.getElementById("name");
var inpuEmail = document.getElementById("email");
var inputPassword = document.getElementById("password");
var arruser = [];

// if(localStorage.getItem("listsigenup") != null)
// {
//   arruser =JSON.parse(localStorage.getItem("listsigenup")) ;
//   console.log(arruser)
// }
// else {
//   console.log("not found" )
// }


function sigenup() {

  var user = {
    name: inputName.value,
    email: inpuEmail.value,
    pass: inputPassword.value
  }
  if (isEmpty() == false) {
    document.getElementById('msg').innerHTML = '<span class="mt-4 text-center d-block text-danger m-3">All inputs is required</span>'
    return false
  }
  var errmsg = vaild_form();
  if (errmsg == true) {
    arruser.push(user);

    localStorage.setItem("listsigenup", JSON.stringify(arruser));
    location.replace('https://' + location.hostname + '/login.html')

  }
  else
  {
    alert(errmsg)
  }


}

function vaildsigenup() {

}
var islogin;
function login() {


  var user = {
    email: inpuEmail.value,
    pass: inputPassword.value
  }
  // console.log(user.email )
  arruser = JSON.parse(localStorage.getItem("listsigenup"));

  // console.log(arruser[0].email )


  for (let index = 0; index < arruser.length; index++) {

    if (user.email == arruser[index].email && user.pass == arruser[index].pass) {
      console.log("login sucssed");
      var username = arruser[index].name;
      localStorage.setItem("islogin", JSON.stringify(username));
      location.replace('https://' + location.hostname + '/home.html')


      return true;
    }
    else if (user.email == arruser[index].email && user.pass != arruser[index].pass) {
      console.log(" password not correct ");
      return false
    }
    else if (user.email != arruser[index].email && user.pass == arruser[index].pass) {
      console.log(" email not correct ");
      return false
    }

  }
  console.log("login faild");
}

function checkuserlogin() {

  islogin = JSON.parse(localStorage.getItem("islogin"));

  if (islogin != null) {
    console.log("login")
    document.getElementById("username").innerHTML = `welcome  ${islogin}`;
  }
  else {
    location.replace('https://' + location.hostname + '/login.html')

    console.log("not login")

  }
}

function logout() {
  localStorage.removeItem("islogin")
}



function vaild_form() {

  var regxname = /[a-z]{3,10}/i;
  var regxmail = /[^\s]*@[a-z0-9.-]*/i;
  var regxpass = /[a-z][0-9]/i;
  if (regxname.test(inputName.value) == false) {
    return "write  valid name from 3 : 10 letters ";
  }
  else if (regxmail.test(inpuEmail.value) == false) {
    return "write  valid email ";
  }
  else if (regxpass.test(inputPassword.value) == false) {
    return "write  valid password ";
  }

  return true
}


function isEmpty() {

  if (inputName.value == "" || inpuEmail.value == "" || inputPassword.value == "") {
    return false
  } else {
    return true
  }
}