var userState = false;
var passState = false;
var emailState = false;
var realNameState = false;
var realSNameState = false;
var userMsgD = " สามารถใช้อักษร a-z,0-9,_,- ความยาว 4-15 ตัว ";
var passMsgD = " สามารถใช้อักษร a-Z,0-9,_,- ความยาว 5-15 ตัว ";
 $(document).bind('mobileinit', function() {
            $(document).on('tap', function(e) {
                $('.activeOnce').removeClass($.mobile.activeBtnClass);
            });
        });
$(document).ready(function() {
	
	FastClick.attach(document.body);
	console.log("FastClickReady");
	$("#loginPage").on("pageinit", loginBindEvent);
	$("#regisPage").on("pageinit", regisBindEvent);
	 document.addEventListener("deviceready", deviceReady, true);
});
function loginBindEvent(){
	console.log("pageinit run");
		$("#loginForm").on("submit",handleLogin);
	}
function regisBindEvent(){
	validAll();
	$("#userInputRegis").on('focusout', checkUsedName).on('focusin', function() {
		$("#pMsgU").text(userMsgD).css("color", "black");
	});
	$("#passInputRegis").on('focusout', checkPass).on('focusout', checkUsedName).on('focusin',
		function() {
			$("#pMsgP").text(passMsgD).css("color", "black");
		});
	$("#repassInputRegis").on('focusout', recheckPass).on('focusout', checkUsedName);
	$("#emailInputRegis").on('focusout', checkEmail);
	$("#nameInput").on('focusout', function() {
		if ($("#nameInput").val()) {
			realNameState = true;
			validAll();
		} else {
			realNameState = false;
			validAll();
		}
	});
	$("#surnameInput").on('focusout', function() {
		if ($("#surnameInput").val()) {
			realSNameState = true;
			validAll();
		} else {
			realSNameState = false;
			validAll();
		}
	});
	$("#sumitBtn").on("click", handleRegis);
	
	}


function handleLogin() {
    var form = $("#loginForm");    
	 var url = 'http://situationreport.meximas.com/ray.php';  // you'll want to change
    //disable the button so we can't resubmit while we wait
    $("#submitButton",form).attr("disabled","disabled");
    var u = $("#username", form).val();
    var p = $("#password", form).val();
    if(u != '' && p!= '') {
        
		$.ajax({
                type: 'GET',
                url: url,
                contentType: "application/json",
                dataType: 'jsonp',
                data: {username:u,password:p},
                crossDomain: true,
                success: function(res) {
                     if(res.success == true) {
                		//store
               			window.localStorage["username"] = u;
                		window.localStorage["password"] = p;             
                		//window.location.replace(some.html);
						window.open("home.html",'_self');
            		} else {
                		navigator.notification.alert("Your login failed", function() {});
           		}
				$("#submitButton").removeAttr("disabled");									
                },
                error: function(e) {
                    console.log(e.message);
                },
                complete: function(e) {
                    console.log("message");
                }
            });
		
		
    } else {
        navigator.notification.alert("You must enter a username and password", function() {});
       $("#submitButton").removeAttr("disabled");
    }
    return false;
}
function dateNow() {
	var now = new Date();
	var day = ("0" + now.getDate()).slice(-2);
	var month = ("0" + (now.getMonth() + 1)).slice(-2);
	var today = now.getFullYear() + "-" + (month) + "-" + (day);
	$('#datePicker').val(today);
}
function loadingShow() {
	$.mobile.loading('show');
	$("#regisForm > *").attr("disabled", true).addClass("ui-state-disabled");
}
function loadingHide() {
	$.mobile.loading('hide');
	$("#regisForm > *").attr("disabled", false).removeClass("ui-state-disabled");
}

function validAll() {
	if (userState === true && passState === true && emailState === true && realNameState === true &&
		realSNameState === true) {
		$("#sumitBtn").removeClass("ui-state-disabled");
		return true;
	} else {
		$("#sumitBtn").addClass("ui-state-disabled");
		return false;
	}
}
function checkUsernameRegEx(username) {
	var pattern = /^[a-z0-9_-]{4,15}$/;
	if (pattern.test(username)) {
		return true;
	} else {
		return false;
	}
}

function checkEmailRegEx(email) {
	var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
	if (pattern.test(email)) {
		return true;
	} else {
		return false;
	}
}

function checkPasswordRegEx(password) {
	var pattern = /^[a-zA-Z0-9_-]{5,15}$/;
	if (pattern.test(password)) {
		return true;
	} else {
		return false;
	}
}
function checkUsedName() {
	var form = $("#regisForm");
	var u = $("#userInputRegis").val();
	var url = 'http://situationreport.meximas.com/checkUsedName.php';
	if (u !== '') {
		if (checkUsernameRegEx(u) === true) {
			$.ajax({
				type: 'GET',
				url: url,
				contentType: "application/json",
				dataType: 'jsonp',
				data: {
					username: u
				},
				crossDomain: true,
				timeout: 10000,
				success: function(res) {
					if (res.success === true) {
						userState = false;
						validAll();
						$("#pMsgU").text(u + " ชื่อนี้มีผู้ใช้แล้ว").css("color", "red");
						$("#userInputRegis", form).val("");
					} else {
						userState = true;
						validAll();
						$("#pMsgU").text(u + " ชื่อนี้สามารถใช้ได้").css("color", "green");
					}
				},
				error: function(e) {
					console.log(e.message);
					userState = false;
					validAll();
					navigator.notification.alert("ERROR กรุณาตรวจสอบการเชื่อมต่อ อินเตอร์เน็ต ");
				},
				complete: function(e) {
					console.log("message");
				}
			});
		} else {
			userState = false;
			validAll();
			$("#pMsgU").text(userMsgD).css("color", "red");
		}
	} else {
		userState = false;
		validAll();
		$("#pMsgU").text("กรุณากรอก Username").css("color", "red");
	}
	return false;
}

function checkPass() {
	var form = $("#regisForm");
	var p = $("#passInputRegis", form).val();
	if (p !== '') {
		if (checkPasswordRegEx(p) === true) {
			passState = false;
			validAll();
			$("#pMsgP").text(" กรอกรหัสอีกครั้ง ").css("color", "black");
		} else {
			passState = false;
			validAll();
			$("#pMsgP").text(passMsgD).css("color", "red");
		}
	} else {
		passState = false;
		validAll();
		$("#pMsgP").text(" กรุณากรอก Password ").css("color", "red");
	}
}

function recheckPass() {
	var form = $("#regisForm");
	var p = $("#passInputRegis", form).val();
	var rp = $("#repassInputRegis", form).val();
	if (rp !== '') {
		if (checkPasswordRegEx(rp) === true) {
			if (p == rp) {
				passState = true;
				validAll();
				$("#pMsgP").text(" รหัสผ่านนี้สามารถใช้ได้").css("color", "green");
			} else {
				passState = false;
				validAll();
				$("#pMsgP").text(" รหัสผ่านนี้ไม่ตรงกัน").css("color", "red");
			}
		} else {
			passState = false;
			validAll();
			$("#pMsgP").text(passMsgD).css("color", "red");
		}
	} else {
		passState = false;
		validAll();
		$("#pMsgP").text(" กรุณากรอก Password อีกครั้ง").css("color", "red");
	}
}
function checkEmail() {
	var form = $("#regisForm");
	var e = $("#emailInputRegis", form).val();
	var url = 'http://situationreport.meximas.com/checkUsedEmail.php';
	if (e !== '') {
		if (checkEmailRegEx(e) === true) {
			$.ajax({
				type: 'GET',
				url: url,
				contentType: "application/json",
				dataType: 'jsonp',
				data: {
					email: e
				},
				crossDomain: true,
				timeout: 10000,
				success: function(res) {
					if (res.success === true) {
						emailState = false;
						validAll();
						$("#pMsgE").text(" Email นี้มีผู้ใช้แล้ว").css("color", "red");
					} else {
						emailState = true;
						validAll();
						$("#pMsgE").text(" Email นี้สามารถใช้ได้").css("color", "green");
					}
				},
				error: function(e) {
					console.log(e.message);
					emailState = false;
					validAll();
					navigator.notification.alert("ERROR กรุณาตรวจสอบการเชื่อมต่อ อินเตอร์เน็ต");
				},
				complete: function(e) {
					console.log("message");
				}
			});
		} else {
			emailState = false;
			validAll();
			$("#pMsgE").text(" กรุณากรอก Email ให้ถูกต้อง ").css("color", "red");
		}
	} else {
		emailState = false;
		validAll();
		$("#pMsgE").text("กรุณากรอก Email").css("color", "red");
	}
	return false;
}
function handleRegis() {
	var form = $("#regisForm");
	$("#sumitBtn").addClass("ui-state-disabled");
	var u = $("#userInputRegis", form).val();
	var p = $("#passInputRegis", form).val();
	var e = $("#emailInputRegis", form).val();
	var rn = $("#nameInput", form).val();
	var rsn = $("#surnameInput", form).val();
	var g = $("#genderSelect", form).val();
	var url = 'http://situationreport.meximas.com/regisUser.php';
	if (validAll()) {
		$.ajax({
			type: 'GET',
			url: url,
			contentType: "application/json",
			dataType: 'jsonp',
			data: {
				username: u,
				password: p,
				email: e,
				realname: rn,
				realsname: rsn,
				gender: g
			},
			crossDomain: true,
			success: function(res) {
				if (res.success === true) {
					window.localStorage["username"] = u;
					window.localStorage["password"] = p;
					window.open("home.html", '_self');
				} else {
					navigator.notification.alert("Your login failed", function() {});
				}
				$("#sumitBtn").removeClass("ui-state-disabled");
			},
			error: function(e) {
				console.log(e.message);
			},
			complete: function(e) {
				console.log("message");
			}
		});
	} else {
		navigator.notification.alert("You must fill form");
		$("#submitButton").removeAttr("disabled");
	}
	return false;
}

function deviceReady() {
	//navigator.splashscreen.hide();
    document.addEventListener("backbutton", function(e){
       if($.mobile.activePage.is('#mainPage')){
           e.preventDefault();
           navigator.app.exitApp();
		   
       }
       else {
           navigator.app.backHistory()
       }
    }, false);
	
	
	console.log("deviceReady");
	navigator.splashscreen.hide();
	//$.mobile.changePage("#loginPage");
	
	
}