var lvl,inGame,rand,list=[],myList=[];
$(".btn").click(function () { 
    pressEffect(this);

    if(inGame)
    {   
        myList.push(btnToNr($(this).attr("id")));
        console.log(myList,list,lvl);
         if(!(listCompare(list,myList)))
          loseScreen()
           else
           if(list.length===myList.length )
            continuare();
        
    }
});
$(document).keydown(function () { 
    inGame=true;
    lvl=1;
    display(lvl);
    list=[];
    myList=[];
    setTimeout(simonSay,1000);
    $(document).off("keydown");
});
function simonSay() { 
    if(inGame){
        rand=Math.floor(Math.random()*4+1);
        pressEffect(nrToBtn(rand));
        list.push(rand);
        console.log(myList,list,lvl);
      }
 }
function continuare()
{
    inGame=true;
    lvl++;
    display(lvl);
    myList=[];
    setTimeout(simonSay,1000);
}
function loseScreen(){
    
    inGame=false;
    wrongBackround();
    $(document).keydown(function () { 
        inGame=true;
        lvl=1;
        display(lvl);
        list=[];
        myList=[];
        setTimeout(simonSay,1000);
        $(document).off("keydown");
    });
    
}
function sound(key) {
    switch (key) {
        case "green":
            var sound=new Audio("./green.mp3");
            sound.play();
            break;
        case "blue":
            var sound=new Audio("./blue.mp3");
            sound.play();
            break;
        case "red":
            var sound=new Audio("./red.mp3");
            sound.play();
            break;
        case "yellow":
            var sound=new Audio("./yellow.mp3");
            sound.play();
            break;
    
        default:
            break;
    }
}
function pressEffect(key){
    $(key).addClass("pressed");
    setTimeout(function() {$(".btn").removeClass("pressed");}, 70);
    sound($(key).attr("id"));
}
function display(level)
{
  $("#level-title").text("Level "+level);
}
function nrToBtn(nr)
{
    switch (nr) {
        case 1: return"#green";
        case 2: return"#red";
        case 3: return"#yellow";
        case 4: return"#blue";
            break;
    }
}
function btnToNr(key)
{
    switch (key) {
        case "green": return 1;
        case "red": return 2;
        case "yellow": return 3;
        case "blue": return 4;
            break;
    }
}
function listCompare(list1,list2) { 
    for(var i=0;i<list2.length;i++)
      if(list1[i]!==list2[i]) return false;
    return true;
}
function wrongBackround()
{
  $("#level-title").text("You lose!Press a key..");
  $("body").addClass("game-over");
  var sound=new Audio("./wrong.mp3");
        sound.play();
  setTimeout(function(){$("body").removeClass("game-over");},100);


}
