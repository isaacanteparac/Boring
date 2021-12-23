$(document).redy( () => {
    $("#btnLogin").click( () =>{
        $("#btnLogin").hide();
        $("#loginBallLoader").show();
    }, 5000)
    
    $("#btnSingup").click( () =>{
        $("#btnSingup").hide();
        $("#signupBallLoader").show();
    }, 5000)
})

