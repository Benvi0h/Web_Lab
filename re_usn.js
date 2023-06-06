let tusn=prompt("Enter the usn to be tested");
let usn=/1NT/i;
let res=usn.test(tusn);
let result=0;
if(res)
result="Valid";
else
result="Invalid";
alert("The Entered USN is "+result);