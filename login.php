<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/style.css">
    <title>Đăng nhập</title>
</head>
<body>
    

    <!--login form-->
    <div class="form__login">
        <div class="form__content">
            <form class="form__sub--content" action="" method="post">
                <h3>Login</h3>
                <div class="form__card">
                    <label for="name">Name</label>
                    <input type="text" name="user__name" required placeholder="Nhập tên của bạn ...">
                </div>
                <div class="form__card">
                    <label for="password">Password</label>
                    <input type="password" name="user__password" required placeholder="Nhập password...">
                </div>
                <input type="submit" value="Login" class="form__submit">
                <div class="form__checkbox">
                    <input type="checkbox" ><span>Remember</span>
                </div>
                <p>Nếu bạn không có tài khoản ? <a href="">Tạo tài khoản tại đây</a></p>
            </form>
        </div>
    </div>

    <div class="form__notify">
        <h3>Vui lòng ...</h3>
    </div>

    <script src="./src/index.js"></script>
</body>
</html>