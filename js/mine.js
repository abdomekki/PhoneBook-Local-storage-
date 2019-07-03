var contacts=[];
var MyInputs=document.getElementsByTagName("input");
function add()
{
    var UserName = MyInputs[0].value;
    var UserPhone =MyInputs[1].value;
    var UserEmail =MyInputs[2].value;
    if(UserName=="" || UserEmail=="" || UserPhone=="")
        {
            alert("Missing Required Data");
        }
    else
        {
           var personObject ={name:UserName,phone:UserPhone,email:UserEmail};
            contacts.push(personObject);
            localStorage.setItem("contacts",JSON.stringify(contacts));
            display();
            clearData(); 
        }
    
}

function display()
{
    contacts=JSON.parse(localStorage.getItem("contacts"));
    var MyTrs=""
    for(var i=0;i<contacts.length; i++)
        {
            MyTrs=MyTrs+"<tr><td>"+(parseInt(i+1))+"</td><td>"+contacts[i].name+"</td><td>"+contacts[i].phone+"</td><td>"+contacts[i].email+"</td></tr>"
        }
    document.getElementById("MyBody").innerHTML=MyTrs;
}
display();


function clearData()
{
    MyInputs[0].value="";
    MyInputs[1].value="";
    MyInputs[2].value="";
    
}