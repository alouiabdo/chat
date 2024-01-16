let johnButton = document.querySelector(".john");
let janeButton = document.querySelector(".jane");
let sendButtonOne = document.querySelector(".sendOne");
let sendButtonTwo = document.querySelector(".sendTwo");
let clearButton = document.querySelector(".clear");
let contentOne = document.querySelector(".conversationOne");
let contentTwo = document.querySelector(".conversationTwo");
let conversationOne = document.querySelector(".conversation-one ") ;
let conversationTwo = document.querySelector(".conversation-two ") ;
let inputOne = document.querySelector(".one");
let inputTwo = document.querySelector(".two");
let d = new Date();
let i = 0;


contentOne.innerHTML=localStorage.getItem("data");
contentTwo.innerHTML=localStorage.getItem("data");


johnButton.addEventListener("click",function(){
    conversationOne.removeAttribute("style")
    conversationTwo.setAttribute("style","display:none")
    clearButton.removeAttribute("style")
    sendButtonOne.addEventListener("click",function(){
        if(inputOne.value!==""){
            contentOne.innerHTML +=`
        <p style ="color:white;background-color: rgb(61, 163, 218);padding: 10px;margin: 8px;border-radius: 5px;
        font-weight: bolder;">John : <span clacc="misseg" style="font-weight: 100;">${inputOne.value}</span><span class="time">${d.getHours()}:${d.getMinutes()}</span></p>`
        localStorage.setItem("dataOne",contentOne.innerHTML);
        localStorage.setItem("dataTwo",contentOne.innerHTML);
        };
        contentOne.scrollTo = contentOne.scrollHeight;
        inputOne.value=""
    });
    if(localStorage.length !== 0){
        contentOne.innerHTML=""
        contentTwo.innerHTML =""
        contentOne.innerHTML = localStorage.getItem("dataOne");
    };
});
console.log(sendButtonOne);
janeButton.addEventListener("click",function(){
    conversationTwo.removeAttribute("style");
    conversationOne.setAttribute("style","display:none");
    clearButton.removeAttribute("style");
    sendButtonTwo.addEventListener("click",function(){
        console.log(inputTwo.value);
        if(inputTwo.value!==""){
        contentTwo.innerHTML +=`
        <p style ="color:white;background-color: rgb(16, 100, 145);padding: 10px;margin: 8px;border-radius: 5px;
        font-weight: bolder;">Jane : <span clacc="misseg" style="font-weight: 100;">${inputTwo.value}</span><span class="time">${d.getHours()}:${d.getMinutes()}</span></p>`
        localStorage.setItem("dataOne",contentTwo.innerHTML);
        localStorage.setItem("dataTwo",contentTwo.innerHTML);
        };
        contentTwo.scrollTo = contentOne.scrollHeight;
        inputTwo.value="";
    });
    if(localStorage.length !== 0){
        contentOne.innerHTML="";
        contentTwo.innerHTML ="";
        contentTwo.innerHTML =localStorage.getItem("dataTwo");
    };
});
clearButton.addEventListener("click",function(){
    if(!conversationOne.hasAttribute("style")){
        localStorage.removeItem("dataOne");
        contentOne.innerHTML="";
    }else if(!conversationTwo.hasAttribute("style")){
        localStorage.removeItem("dataTwo");
        contentTwo.innerHTML="";
    }
    
});