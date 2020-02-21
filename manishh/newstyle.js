function ValidateEmail(inputText)
{
var mailformat = /^([a-zA-Z0-9\.-]+)@([a-z0-9-]+).([a-z{2,8}])(.[a-z{2,8}])$/
 /*/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;*/
if(inputText.value.match(mailformat))
{
	alert("You have entered a valid email address.Congratulations!")
document.form1.text1.focus();
return true;
}
else
{
alert("Sorry!You have entered an invalid email address.");
document.form1.text1.focus();
return false;
}
}