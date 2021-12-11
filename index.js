//var day=document.getElementById("uname1").submit();
//var gender=document.getElementById("uname").submit();
//function myFunction() {
  //  document.getElementById("form1").submit();
  //}

  var day=d.getDay(document.getElementById("uname1"));
  var gender=document.getElementById("uname");
  var a=male;
  var b=female;

  
  function myFunction() {
       if(day==0 && gender==a){
         alert("Your name is Kwasi");

       }else if(day==1 && gender==a){
         alert("Your name is Kwadwo");
       
       }else if(day==2 && gender==a){
        alert("Your name is Kwabena");

      }else if(day==3 && gender==a){
        alert("Your name is Kwaku");

      }else if(day==4 && gender==a){
        alert("Your name is Yaw");

      }else if(day==5 && gender==a){
        alert("Your name is Koti");

      }else 
        alert("Your name is Kwame");
      
  }
  
    
