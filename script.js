// function showOutput(output){
//     document.getElementById('output').innerHTML = output

// }


function showOutput(output){
    document.getElementById('output').innerHTML = output
}

function clearOutput(){
    document.getElementById('output').innerHTML = ''
}

// function getFieldValue(fieldvalue){
//    return document.getElementById(fieldvalue).value
// }














// function clearOutput() {
//     document.getElementById('output').innerHTML = ''
// }
// // clear output------------------
// document.getElementById('clearbutton').onclick = function(){
//     let outputBoxHTML = document.getElementById('output').innerHTML;
//     if(!outputBoxHTML.length){
//         showNotification("It is Already Empty!", "error")
// }else{
//     clearOutput();
//     showNotification("output Box has been cleared.", "success")
// }

// }
// // -------------------------------------------------------
   
// function getFieldValue(fieldId){
//     return document.getElementById(fieldId).value

// }

// function getRandomId(){
//     return Math.random().toString(36).slice(2)
// }
   
// // let emialFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// // --------------------------------------------------------------------------------------------


//   //  consrtructors----------------------------------------------------------------------------

//   function User(firstName,lastName,email,dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.dob = dob;
// }
// //   calculate age 
// User.prototype.calculateAge = function(){
//     var dob = new Date(this.dob);  
//     //calculate month difference from current date in time  
//     var month_diff = Date.now() - dob.getTime();  
    
//     //convert the calculated difference in date format  
//     var age_dt = new Date(month_diff);   
      
//     //extract year from date      
//     var year = age_dt.getUTCFullYear();  
    
//     //now calculate the age of the user  
//     var age = Math.abs(year - 1970);  
//     return age;
// }


let users = []

function handleSubmit(){
    event.preventDefault()

    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let email = document.getElementById('email').value
    let dob = document.getElementById('dob').value

    
    firstName = firstName.trim();
    lastName = lastName.trim();
    email = email.trim();

    if(firstName.length < 3){
     showNotification("Please Enter your First Name correctly!", "error");
      return;
    }

    if(!emailFormat.test(email)){
        showNotification("Please Enter your Email!", "error");
        return;
       }

    if(!dob.length){
        showNotification("Please Enter your Date of Birth!", "error");
        return;
       }
    // console.log(firstName, lastName, email, dob)

    let user = {
        firstName,
        lastName,
        email,
        dob,
    }

    users.push(user)



    showTable()


    // for (let index = 0; index < users.length; index++) {
    //     const element = users[index];
    //     showOutput(element.firstName)
        
        
    // }

    // showTable()

    // console.log(users)





    // let user = {
    //     // //     // property      value if key or value same it is wirtten in just 1 form 
    //     // //     firstName,
    //     // //     lastName,
    //     // //     email,
    //     // //     dob,
    //     // //    }

    

}





// var users = [];
// //    ------------------------------------------------------
// function handleSubmit(){
//     event.preventDefault();

//     let firstName = getFieldValue('firstName');
//     let lastName = getFieldValue('lastName');
//     let email = getFieldValue('email');
//     let dob = getFieldValue('dob')

//     firstName = firstName.trim();
//     lastName = lastName.trim();
//     email = email.trim();

//     if(firstName.length < 3){
//      showNotification("Please Enter your First Name correctly!", "error");
//      return;
//     }

//     if(!emailFormat.test(email)){
//         showNotification("Please Enter your Email!", "error");
//         return;
//        }

//     if(!dob.length){
//         showNotification("Please Enter your Date of Birth!", "error");
//         return;
//        }
   
// //    object
// //    let user = {
// //     // property      value if key or value same it is wirtten in just 1 form 
// //     firstName,
// //     lastName,
// //     email,
// //     dob,
// //    }

// let user = new User(firstName,lastName,email,dob)


   
// //    add value in object 

// user.id = getRandomId();
// user.dateCreated = new Date().getTime();
// user.status = 'active';
// user.role = 'student';
// users.push(user);
// // console.log(users)
//    showNotification("A new user has been successfully added!", "success")
//    showTable()
   
// }
   
// //    showtable---------------------------------------------------------------

   function showTable(){

    // if(!users.length){
    //     showNotification("No user Available", "error")
    //     return;
    // }

    let tableStartingCode = '<div class="table-responsive"><table class="table">'
    let tableEndingCode ='</table></div>'

    let tableHead = '<thead><tr><th scope ="col">#</th><th scope ="col">First Name</th><th scope ="col">Last Name</th><th scope ="col">Email</th><th scope ="col">Dob</th><th scope ="col">Age</th></tr></thead>'
    let tableBody = ''

    for(let i = 0 ; i < users.length; i++){
        tableBody += '<tr><th scope ="col">'+ (i + 1) +'</th><td>'+users[i].firstName+'</td><td>'+users[i].lastName+'</td><td>'+users[i].email+'</td><td>'+users[i].dob+'</td><td></td></tr>'
     }

     let table = tableStartingCode + tableHead + "<tbody>" + tableBody + "</tbody>" + tableEndingCode
     showOutput(table)
   }
   
// //    users in cosole

// function printuser(){
//     console.log(users)
// }
   
   
   
   
   
   
   
   
   
   
   function showNotification(msg, type){
    let bgColor;

    switch(type){
        case "success":
            bgColor = "green"
            break;
        case "error":
            bgColor = "red"
            break;
        default:
            bgColor = "#000"
            break;

    }

    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: bgColor,
        },
        // onClick: function(){} // Callback after click
      }).showToast();

    }
