function idCard()
{
  var firstName=document.getElementById("firstName").value;
  var lastName=document.getElementById("lastName").value; 
  var age=document.getElementById("age").value;
  var phoneNumber=document.getElementById("phoneNumber").value; 
  var address=document.getElementById("address").value;
  var postFullName=document.getElementById("postFullName");
  var postAge=document.getElementById("postAge");
  var postPhoneNumber=document.getElementById("postPhoneNumber");
  var postAddress=document.getElementById("postAddress");
  postFullName.innerHTML= firstName + " " + lastName;
  postAge.innerHTML="AGE: " +age;
  postPhoneNumber.innerHTML="PHONE NUMBER: " + phoneNumber;
  postAddress.innerHTML=address;
}