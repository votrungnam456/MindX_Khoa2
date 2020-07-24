async function loginController(req,res){
    let user = req.body.username
    let pwd = req.body.pwd
    console.log(user,pwd)
    if (user && pwd) {
        try {
          const loginResult = await firebase.auth().signInWithEmailAndPassword(user, pwd);
          console.log(loginResult)
          if (!loginResult.user.emailVerified) {
            // error.innerHTML = "<p>Vui lòng xác nhận email</p>";
            // error.style.display="block";
            console.log('A')
          }
          else{
            console.log('Đăng nhập thành công')
            
          }
        } catch (err) {
        //   error.innerHTML = "<p>Tài khoản hoặc mật khẩu không đúng</p>";
        //   error.style.display="block";
        console.log('Tài khoản hoặc mật khẩu không đúng')
        }
      }
    else{
    //   error.innerHTML = "<p>Tài khoản hoặc mật khẩu không được để trống</p>";
    //   error.style.display="block";
    console.log('Tài khoản hoặc mật khẩu không được để trống')
    }
  }


module.exports = loginController;