function login(){
    var name=document.getElementById("name").Value;
    var password=document.getElementById("password").Value;
    if((name=="Admin" && password=="Admin")|| (name=="User" && password=="User"))
    {
        alert("login successfully");
        return true;
    }
    else if(name!="Admin" || name=="")
    {
        alert("Enter Username or Incorrect Username");
        return false;
    }

    else if(password!="Admin" || password=="")
    {
        alert("Enter password or Incorrect password");
        return false;
    }

    else{}
}