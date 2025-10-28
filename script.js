let sub=document.getElementById('submit');
sub.onclick=getFormvalue;
function getFormvalue() {
    //Write your code here
	let name=document.getElementById('fname').value;
	let lname=document.getElementById('lname').value;
	alert(`"${name} ${lname}".`);
}
