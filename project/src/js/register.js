$(() => {
    let info = document.querySelector(".xinxi")
    $("#phoneNum").blur(function() {
        var phoneNum = $("#phoneNum").val().trim();
        var phoneReg = /^1[3-9]\d{9}$/;
        if(phoneNum == "") {
            info.innerText = "手机号不能为空!";
            info.style.color = "red";
        }else{
            if(phoneReg.test(phoneNum)){
                info.innerText = "手机号格式正确！";
                info.style.color = "#195";00
            }else{
                info.innerText = "手机号格式不正确！";
                info.style.color = "red";
            }
        }
    })

    $("#passwordNum").blur(function() {
        var passwordNum = $("#passwordNum").val().trim();
        var passReg =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        if(passwordNum == "") {
            info.innerText = "密码不能为空!";
            info.style.color = "red";
        }else{
            if(passReg.test(passwordNum)){
                info.innerText = "密码格式正确！";
                info.style.color = "#195";00
            }else{
                info.innerText = "密码格式不正确！";
                info.style.color = "red";
            }
        }
    })
    $("#yzNum").blur(function() {
        var yzNum = $("#yzNum").val().trim();
        if(yzNum == "") {
            info.innerText = "验证码不能为空!";
            info.style.color = "red";
        }
    })
    $("#loginBtnB").click(function() {
        var phoneNum = $("#phoneNum").val();
        console.log(phoneNum);
        
        var passwordNum = $("#passwordNum").val();
        $.ajax({
            type: "post",
            url: "http://127.0.0.1/code/project/src/server/register.php",
            data: {phoneNum,passwordNum},
            dataType: "json",
            success: function (response) {
                if(response.status == "ok") {
                   alert("恭喜你您，注册成功");
                   window.location.href = "./login.html"
                }else{
                    alert(response.data.msg);
                }
            }
        });
    })
})