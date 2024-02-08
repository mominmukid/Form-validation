
const phone_erorr=document.getElementById('phone-erorr');
const email_erorr=document.getElementById('email-erorr');
const name_erorr=document.getElementById('name-erorr');
const msg_erorr=document.getElementById('msg-erorr');
const sub_erorr=document.getElementById('sub-erorr');
const submit=document.getElementById('submit');
const validate_name=()=>{
    let name=document.getElementById('input-name').value;
    if(name.length==0){
        name_erorr.innerHTML="*Name is required";
        return false;
    }
     if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        name_erorr.innerHTML="*Write full name";
        return false;
    }
        name_erorr.innerHTML=`<i class="fa-solid fa-circle-check" id="valid"></i>`;
        return true;
    

}

const validate_phone=()=>{
    let phone=document.getElementById('phone').value;
    if(phone.length==0){
        phone_erorr.innerHTML="*Phone number is requird";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phone_erorr.innerHTML="*only number plsese";
        return false;
    }
    if(phone.length !=10){
        phone_erorr.innerHTML="*Phone no should be 10 digit";
        return false;
    }
    phone_erorr.innerHTML=`<i class="fa-solid fa-circle-check" id="valid"></i>`;
    return true;
}

const validate_email=()=>{
    let email=document.getElementById('email').value;
    if(email.length==0){
         email_erorr.innerHTML="*Email is requird";
         return false;
    }
    if(!email.match(/^[Aa-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        email_erorr.innerHTML="Email is invalid";
        return false;
    }
    email_erorr.innerHTML=`<i class="fa-solid fa-circle-check" id="valid"></i>`;
    return true;
}

const validate_msg=()=>{
    let text=document.getElementById('massage').value;
    let char=30;
    let left=char-text.length;
   
    if(left >0){
        msg_erorr.innerHTML=`${left} Chrecter requird`;
        return false;
    }
   
        msg_erorr.innerHTML=`<i class="fa-solid fa-circle-check" id="valid"></i>`;
        return true;

}

const validatesub=()=>{
    if( !validate_name() || !validate_phone() || !validate_email() || !validate_msg()){
        sub_erorr.style.display="block";
        sub_erorr.innerHTML="*fix the error";
        setTimeout(()=>{
            sub_erorr.style.display="none";
        },3000)

       
    }else{
    sub_erorr.innerHTML=`<i class="fa-solid fa-circle-check" id="valid"></i>`;
    }
};