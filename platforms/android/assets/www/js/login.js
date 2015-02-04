function init() {
	document.addEventListener("deviceready", deviceReady, true);
	delete init;
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

function deviceReady() {
	navigator.splashscreen.hide();
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
	$("#loginPage").on("pageinit",function() {
		console.log("pageinit run");
		$("#loginForm").on("submit",handleLogin);
		//checkPreAuth();
		//handleLogin();
	});
	//$.mobile.changePage("#loginPage");
	navigator.splashscreen.hide();
	
}