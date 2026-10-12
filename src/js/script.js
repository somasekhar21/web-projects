let player=document.querySelector('#player');
let computer = document.querySelector('#computer');
let btn=document.querySelector('#btn1');
let message=document.querySelector(".message")

//parsing and saving user choice through eventlistners
let choices=document.querySelectorAll('.choices');
let userchoice=null;
let playerHistory=[];

for (let i of choices[0].children) {
    
    i.addEventListener('click',()=>{

        if (i.id==='rock'){
            userchoice="rock";
            playerHistory.push(0);
        }
        else if(i.id==='paper'){
            userchoice="paper";
            playerHistory.push(1);
        }
        else{
            userchoice="scissors";
            playerHistory.push(2);
        }
        
    })

    i.addEventListener('click',()=>{

        comChoice=computerchoice();
        playerScore=Number(player.textContent);
        comScore=Number(computer.textContent);        

        if (userchoice===comChoice){
            message.textContent=`tie! Your Choice ${userchoice}, computer choice ${comChoice}`;
        }
        else if(userchoice==='rock' && comChoice==='scissors'){
            //update score
            player.textContent=playerScore+1;
            //update message
            message.textContent=`you win! Your Choice ${userchoice}, computer choice ${comChoice}`;
        }
        else if(userchoice==='paper' && comChoice==='rock'){
            player.textContent=playerScore+1;
            message.textContent=`you win! Your Choice ${userchoice}, computer choice ${comChoice}`;
        }
        else if(userchoice==='scissors' && comChoice==='paper'){
            player.textContent=playerScore+1;
            message.textContent=`you win! Your Choice ${userchoice}, computer choice ${comChoice}`;
        }
        else{
            computer.textContent=comScore+1;
            message.textContent=`you lose! Your Choice ${userchoice}, computer choice ${comChoice}`;
        }
    
    })

}
let computerchoice=()=>{
    choices=['rock','paper','scissors']
    let idx=Math.floor(Math.random()*3);
    return choices[idx];
}


//button action
btn.addEventListener('click',()=>{
    player.textContent='0';
    computer.textContent='0';
    message.textContent="play your move";
})







