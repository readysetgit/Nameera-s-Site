function validateForm(){
    var flag1=0;
    var flag2=0;
    var success=0;
    var x = document.forms["loginForm"]["userName"].value;
    if (x == "") {
        flag1=1;
    }
    

    var y=document.forms["loginForm"]["password"].value;
    if(y=="") {
        flag2=1;
    }

    if (x=="nameera" && y=="password" ){
        alert("You may go to the homepage now");
        flag1=0;
        flag2=0;
        success=1;
        sessionStorage.setItem("username", "Nameera");
    }
    else if (x=="sadya" && y=="password" ){
        alert("You may go to the homepage now");
        flag1=0;
        flag2=0;
        success=1;
        sessionStorage.setItem("username", "Sadya");
    }
    else if (x=="fahad" && y=="password" ){
        alert("You may go to the homepage now");
        flag1=0;
        flag2=0;
        success=1;
        sessionStorage.setItem("username", "Fahad");
    }
    
    else if (flag1==1 && flag2==1){
        alert("Enter Username and Password");
        flag1=0;
        flag2=0;
    }
    else if (flag1==1){
        alert("Enter the Username");
        flag2=0;
    }
    else if(flag2==1){
        alert("Enter the Password");
        flag1=0;
    }
    else{
        alert("You have entered the wrong ID or password");
    }

    if (success==1){
        location.assign("./homepage.html"); // or
    }
}




//SO THIS FUNCTION RUNS WHENEVER THE PRODUCT PAGE LOADS. 
window.onload = function() {
    
    if (this.sessionStorage.username!=""){
        $("#logoutbutton").removeAttr('hidden')
        $("#mainnavbar").append(`<h3 style="margin-left:20px"> Hi ${sessionStorage.username}</h3>`) //This prints nameera on home page when logged in
    }

    var product_count=10;
    var IDs=new Array;
    var product_name=new Array;
    var product_price=new Array;
    var product_image=new Array;

    IDs=[1,2,3,4,5,6,7,8,9,10];
    product_name=["Shoes", "Pillow", "Blanket","Kettle", "TV","Chair","Football","Racket","Bicycle"];
    product_image=["image1","image2","image3","image4","image5","image6","image7","image8","image9","image10"];
    product_price=[200,25,50,20,1000,60,70,40,100,400]
    
    //NOTE: It's not a "" or '' .... it's a ``
    string=`<tr>  
    <th>Product ID</th>
    <th>Product Name</th>
    <th>Product Price</th>
    <th>Product Image</th>
    </tr>`;

    for (var i=0;i<product_count;i++){
        $("#productlist").append(string)

        string=`<tr>
                <th>${IDs[i]}</th>
                <th>${product_name[i]}</th>
                <th> SAR ${product_price[i]}</th>
                <th><img src="images/${product_image[i]}.jpg" alt="Logo" style="width:100px;"/></th>
                </tr>`;
    }
  };

  function logout() {
    sessionStorage.username="";
    $("#logoutbutton").attr('hidden','true')
    alert("Please Refresh Your Page")
  }
