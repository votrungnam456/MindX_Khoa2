
let submit = document.getElementById("btn-submit")
submit.addEventListener('click',async ()=>{
  let error = document.getElementById("err")
    userLogin = {
      username : document.getElementById("txtUser").value,
      password : document.getElementById("txtPwd").value
    }

  console.log(userLogin.username)
  console.log(userLogin.password)
  
  if (userLogin.username && userLogin.password) {
      try {
        const loginResult = await firebase.auth().signInWithEmailAndPassword(userLogin.username, userLogin.password);
        if (!loginResult.user.emailVerified) {
          error.innerHTML = "<p>Vui lòng xác nhận email</p>";
          error.style.display="block";
        }
        else{
          alert('Đăng nhập thành công')
          window.open('#','_self')
        }
      } catch (err) {
        error.innerHTML = "<p>Tài khoản hoặc mật khẩu không đúng</p>";
        error.style.display="block";
      }
    }
  else{
    error.innerHTML = "<p>Tài khoản hoặc mật khẩu không được để trống</p>";
    error.style.display="block";
  }
})


let unCheckError = document.getElementById("txtUser");
let unCheckError2 =document.getElementById("txtPwd");
unCheckError.addEventListener('click', ()=>{
  let error = document.getElementById("err")
  error.style.display="none";
})
unCheckError2.addEventListener('click', ()=>{
  let error = document.getElementById("err")
  error.style.display="none";
})