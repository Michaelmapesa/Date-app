
 var Day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
 var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
 
 var myForm = document.getElementById("form1");
 myForm.addEventListener("submit",(e)=>{
   e.preventDefault();
   var birthDate = document.getElementById("uname1").value ;
   birthDate=new Date(birthDate);
   var gender=document.getElementById("sel1").value;
   var birthYear=birthDate.getFullYear();
   var birthMonth=birthDate.getMonth()+1;
   var birthDay=birthDate.getDate();
   var MM=birthMonth;
   var CC=birthYear.toString().substr(0,2);
   var YY=birthYear.toString().substr(2,2);
   var MM=birthMonth;
   var DD=birthDay;
   CC = parseInt(CC);
   YY = parseInt(YY);
   MM = parseInt(MM);
   DD = parseInt(DD);
  
   weeksDay=(((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;
   weeksDay=parseInt(weeksDay)-1;

    if(weeksDay==0 && gender=="male"){
      alert("Your name is Kwasi");
      
    }else if(weeksDay==1 && gender=="male"){
      alert("Your name is Kwadwo");
    
    }else if(weeksDay==2 && gender=="male"){
      alert("Your name is Kwabena");

    }else if(weeksDay==3 && gender=="male"){
      alert("Your name is Kwaku");

    }else if(weeksDay==4 && gender=="male"){
      alert("Your name is Yaw");

    }else if(weeksDay==5 && gender=="male"){
      alert("Your name is Kofi");

    }else if(weeksDay==6 && gender=="male"){
      alert("Your name is Kwame");

    }else if(weeksDay==0 && gender=="female"){
      alert("Your name is Akosua");
   
    }else if(weeksDay==1 && gender=="female"){
      alert("Your name is Adwoa");

    }else if(weeksDay==2 && gender=="female"){
      alert("Your name is Abenaa");

    }else if(weeksDay==3 && gender=="female"){
      alert("Your name is Akua");

    }else if(weeksDay==4 && gender=="female"){
      alert("Your name is Yaa");

    }else if(weeksDay==5 && gender=="female"){
      alert("Your name is Afua");

    }else if(weeksDay==6 && gender=="female"){
      alert("Your name is Ama");   
    }else{
      return false;
    }
    document.getElementById("form1").reset();
    
      
  });
  

       
     
  
    

 





