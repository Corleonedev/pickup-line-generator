const btn=document.querySelector("#btn");
const display=document.querySelector("#display");


const pickupLines=[
 
  "Do you like raisins? How do you feel about a date?",
  "If I could rearrange the alphabet, I’d put ‘U’ and ‘I’ together.",
  "Are you a parking ticket? Because you’ve got FINE written all over you.",
  "Are you from Tennessee? Because you’re the only 10 I see!",
  "Are you French? Because Eiffel for you.",
  "I’m no photographer, but I can picture us together.",
  "Feel my shirt. Know what it’s made of? Wifey material.",
  "Are you Australian? Because you meet all of my koala-fications.",
  "OMG. I was going to wear this exact same outfit tonight.",
  "Are you a magician? When I look at you everything disappears.",
  "There is something wrong with my cell phone. It doesn’t have your number in it.",
  "Are you religious? Cause you’re the answer to all my prayers.",
  "Do you believe in love at first sight — or should I walk by again?",
  "Do you like coffee? Because I like you a latte.",
  "Can I give you a hug to show you how soft my sweater is?",
  "If a star fell from the sky every time I thought about you, then tonight the sky would be empty.",
  "Is it hot in here? Or is it just you?",
  "I don’t have a library card, but do you mind if I check you out?",
  "Are you the sun? I’m about to get a sunburn looking at you.",
  "Hey, tie your shoes! I don’t want you falling for anyone else.",
  "Roses are red. Violets are blue. I didn’t know what perfect was until I met you.",
  "Can I follow you where you’re going right now? Because my parents always told me to follow my dreams.",
  "You look great right now. Do you know what else would look great on you? Me!",
  "You dropped something. My jaw.",
  "If you were words on a page, you’d be fine print.",
  "There must be something wrong with my eyes, I can’t take them off you.",
  "Are you a bank loan? Because you got my interest. Somebody call the cops, because it’s got to be illegal to look that good!",
  "Do you know why it doesn’t matter if there’s gravity or not? Because I’d still fall for you.",
  "I must be a snowflake, because I’ve fallen for you.",
  "Are you a keyboard ? Because you are my type.",
  "Do you have a map? I just got totally lost in your eyes.",
  "Are you an interior decorator? When I saw you the room became so beautiful.",
  "Sweetness is my weakness.",
  "You know what’s the worst thing that can happen to you right now? Me not dating you.",
  "I know you’re busy today, but can you add me to your to-do list?",
  "Has anyone ever told you how beautiful my eyes are?",
  "If you were a steak you would be well done.",
  "You must be a broom because you swept me off my feet.",
  "Did it hurt when you fell from heaven?",
  "Drake would call you and I God’s Plan.",
  "Come live in my heart, and pay no rent.",
  "Hello, I’m a thief, and I’m here to steal your heart."
]

function generate(){

    const pickUpindex=Math.floor(Math.random()*pickupLines.length);
    const pickupLine = pickupLines[pickUpindex];
    
    pickupLines.splice(pickUpindex,1)
    return pickupLine;

    
    


}
btn.addEventListener('click',function(){
  if(pickupLines.length >0){
    const line=generate();
    display.innerHTML=line;

  }
  else{
    display.innerHTML="no more pick up lines come back again."
  }
  
});

