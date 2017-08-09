function valid (form) {
    var fail = false;
    var name = form.name.value;
    var email = form.email.value;
    var password = form.password.value;
    var RePassword = form.RePassword.value;
    var sex = form.sex.value;
    //регулярные выражения
    var adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
    //
    
    if (name == "" || name == " "){
        fail = "Вы не ввели имя";
    }
    else if (adr_pattern.test(email) == false){
        fail = "Вые ввели Email неправильно";
    }
    //split разбивает строчку email по символу @
    else if (email.split('@').length - 1 == 0){
        fail = "Вые ввели Email неправильно";
    }
    else if (password == ""){
        fail = "Вы не ввели пароль";
    }
    else if (password != RePassword){
        fail = "Пароли не совпадают";
    }
    else if (sex == ""){
        fail = "Укажите пол";
    }
    if (fail){
        alert (fail);
    }
    //Перенаправление пользователя на другую страницу
    else{
        window.location = "http://google.com";
    }
    
}
valid (form);