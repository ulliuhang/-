$(() => {
    //001--界面切换
    $(".loginTop span" ).click(function() {
        // 设置当前标签的选中样式（排它处理）
        $(this).addClass("active").siblings().removeClass("active");
        
        let suoying = $(this).index();

        $(".loginMain").eq(suoying).addClass("current").siblings().removeClass("current")

    }); 

    // 手机
    let info = document.querySelector(".xinxi");
    $("#phoneNum").blur(function() {
        var phoneNum = $("#phoneNum").val().trim();
        var phoneReg = /^1[3-9]\d{9}$/;
        if(phoneNum == "") {
            info.innerText = "手机号不能为空！";
            info.style.color = "red";
        } else{
            if(phoneReg.test(phoneNum)){
                info.innerText = "手机号格式正确！";
                info.style.color = "#195";
            }else{
                info.innerText = "手机号格式不正确！";
                info.style.color = "red";
            }
        }
    })
    // 邮箱
    let emailMsg = document.querySelector("#email");
    $("#emailNum").blur(function() {
        var emailNum = $("#emailNum").val().trim();
        var emailReg = /^\w+@\w+\.[a-zA-Z]+$/;
        if(emailNum == ""){
            emailMsg.innerText = "邮箱帐号不能为空！"
            emailMsg.style.color = "red"
        }else{
            if(emailReg.test(emailNum)){
                emailMsg.innerText = "邮箱格式正确！";
                emailMsg.style.color = "#195";
            }else{
                emailMsg.innerText = "邮箱格式不正确！";
                emailMsg.style.color = "red";
            }
        }
    })
    // 002--发送请求登录
    // 给立即登录按钮添加点击事件，当点击该按钮的时候获取用户名和密码，发请求给服务器，等到服务器返回的结果(登录成功 | 登录失败[帐号不存在？密码不正确]) 
    $("#loginBtnB").click(function() {
        var emailNum = $("#emailNum").val();
        var passwordNum = $("#passwordNum").val();

        $.ajax({
            type: "post",
            url: "http://127.0.0.1/code/project/src/server/login.php",
            data: {emailNum,passwordNum},
            dataType: "json",
            success: function (response) {
                if(response.status == "ok") {
                    window.location.href = "https://www.kaola.com/"
                }else{
                    alert(response.msg);
                }
            }
        });
    })

})