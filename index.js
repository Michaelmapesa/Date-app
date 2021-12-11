//var day=document.getElementById("uname1").submit();
//var gender=document.getElementById("uname").submit();
//function myFunction() {
  //  document.getElementById("form1").submit();
  //}
 
  const submit = document.getElementById('submit');
  const day=document.getElementById("uname1")

submit.addEventListener('click', function() {
    alert(day.value) //returns a string to parse use .parseFloat
})
  
    
  