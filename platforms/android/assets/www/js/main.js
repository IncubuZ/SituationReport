document.addEventListener("backbutton", function(e){
    if($.mobile.activePage.is('##panel-fixed-page1')){
        e.preventDefault();
        navigator.app.exitApp();
    }
    else {
        navigator.app.backHistory()
    }
}, false);
