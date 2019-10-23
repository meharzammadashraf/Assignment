var user = ['ALI' , 'AHMAD' , 'AZAM'];
function myFun(){    
    document.getElementById("det").innerHTML = "We've following users available in our list: <br>";
    for( var i = 0; i<user.length; i++){
        document.getElementById("det").innerHTML += i+1 + ")" + user[i] + "<br>";
    }
}
function myFu(add){
   var add = document.getElementById("det").innerHTML= prompt("enter user:").toUpperCase();
   user.push(add);
   alert("Your new user "+ add + " perfectly.");
}
function myFunc(){
    var de = prompt("enter user that you can delete:");
    var del = de.toUpperCase();
    for (var i = 0; i <= user.length; i++) {
         if (del === user[i]) {
            var firstChar = user.indexOf(del);
            var a = user.splice(firstChar , 1);
         alert("Delete successfully!");
         document.getElementById("det").innerHTML = "We've following users available in our list: <br>";
         for( var z = 0; z<user.length; z++){
             document.getElementById("det").innerHTML += z+1 + ")" + user[z] + "<br>";
         }
        }
        }
    }
    function myFuc(){
    var logi = prompt("Enter user name for login!");
    var login = logi.toUpperCase();
    for (var i = 0; i <= user.length; i++) {
        if (login === user[i]) {
            document.getElementById("ans").innerHTML = "Hello " + login;
            document.getElementById("det").innerHTML = login +" login successfully";
        }
    } 
}

