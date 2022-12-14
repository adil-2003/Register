function resume(){
    let firstname;
    firstname=document.getElementById('fname').value;
    console.log(firstname);
    let middlename;
    middlename=document.getElementById('mname').value;
    console.log(middlename);
    let lastname;
    lastname=document.getElementById('lname').value;
    console.log(lastname);
    document.getElementById('name').innerHTML=firstname+middlename+lastname;
    let mailid;
    emailaddress=document.getElementById('mailid').value;
    console.log(emailaddress);
    document.getElementById('mailid').innerHTML=mailid;
    let mobileno;
    mobilenumber=document.getElementById('mobileno').value;
    console.log(mobilenumber);
    document.getElementById('mno').innerHTML=mobileno;

}