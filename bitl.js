function bin_to_dec(a){
    let t=0;
    let cnt=0;
    b=parseInt(a,2);
return b;
}
function getOption1() {
    i1= document.querySelector('#input1');
    input1 = i1.value;
    let ip1=document.querySelector('#ip1').value;
    let ip2= document.querySelector('#ip2').value;
    if(input1=='Binary'){
    ip1=bin_to_dec(ip1);
    ip2=bin_to_dec(ip2);
    }
    
    // console.log(ip1 &ip2);
    rks.innerHTML=ip1 &ip2;
}
function getOption2() {
    i1= document.querySelector('#input1');
    input1 = i1.value;
    let ip1=document.querySelector('#ip1').value;
    let ip2= document.querySelector('#ip2').value;
    if(input1=='Binary'){
    ip1=bin_to_dec(ip1);
    ip2=bin_to_dec(ip2);
    }
    rks.innerHTML=ip1 | ip2;
}
function getOption3() {
    i1= document.querySelector('#input1');
    input1 = i1.value;
    let ip1=document.querySelector('#ip1').value;
    let ip2= document.querySelector('#ip2').value;
    if(input1=='Binary'){
    ip1=bin_to_dec(ip1);
    ip2=bin_to_dec(ip2);
    }
    rks.innerHTML=ip1 ^ ip2;
}