/* var rock ; 
var paper ;
var scissors ; /* in this case you don't need this vars  */

/* function gameThree(team1 , team2 )
{
    if (team1== rock && team2 == scissors ||  team1== scissors && team2 == rock)
    {
        console.log("rock win");

    }
    else if (team1==rock && team2 == paper || team1==paper && team2==rock)
    {
        console.log("paper win");
    }
    else if (team1==scissors && team2 == paper || team1==paper && team2==scissors)
    {
        console.log("scissors win")

    }
    /* you can write team1==team2 for draw */
    /* else if (team1==rock && team2 == rock || team1==paper && team2==paper || team1==scissors && team2==scissors)
    { 
        console.log("draw");
    }

    else
    {
        console.log("please write rock, paper or scissors anyway");
    }
    
}  */
var rock = "rock";
var paper = "paper";
var scissors = "scissors";

function gameThree(team1, team2) {
    if (team1 === "rock" && team2 === "scissors") {
      console.log("rock wins");
    } else if (team1 === "rock" && team2 === "paper") {
      console.log("paper wins");
    } else if (team1 === "scissors" && team2 === "paper") {
      console.log("scissors wins");
    } else if (team1 === team2) {
      console.log("draw");
    } else {
      console.log("please enter 'rock', 'paper', or 'scissors'");
    }
  }
  
var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario GANO con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "el usuario GANO con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("el usuario GANO con " + op3)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};
/* the point its stettle the specific parametr to user
 */resultado(op1,op3) //el usuario GANO con Piedra``
 ///

function gameThree(user,cpu)
{
    if (user != cpu)
    {
        if(user=="rock" && cpu=="scissors")
        {
            console.log("you win");
        }
        else if(user=="paper" && cpu=="rock")
        {
            console.log("you win");
        }
        else if(user=="scissors" && cpu=="paper")
        {
            console.log("you win");
        }
        else if (cpu=="paper" || cpu=="rock" || cpu=="scissors")
        {
            console.log("you fail");
        }
        else
        {
            console.log("please, select rock, paper or scissors")
        }
    }
    else
    {
        console.log("draw");
    }
}
function caseGame(user,cpu)
{
    switch (user)
    {
        case 1:
            if (user!=cpu)
            {
                console.log("Work it");

            }
        break;
        default:
        console.log("Dont work it ");
             
    }
}
caseGame(1,2);
///////////////
function caseGame(user,cpu)
{
    switch (user)
    {
        case cpu:
            console.log("draw");
        break;
        case "rock":
            if(cpu=="scissors")
            {
                console.log("you win  ");
                
            }
            else if(cpu=="paper")
            {
                console.log("you fail");
            }
            else
            {
                console.log("please selec one cpu")
            }
        break;
        case "paper":
            if(cpu=="rock")
            {
                console.log("you win  ");
                
            }
            else if(cpu=="scissors")
            {
                console.log("you fail");
            }
            else
            {
                console.log("please selec one cpu")
            }
        break;
        case "scissors":
            if(cpu=="paper")
            {
                console.log("you win  ");
                
            }
            else if(cpu=="rock")
            {
                console.log("you fail");
            }
            else
            {
                console.log("please selec one cpu")
            }
        break;
        default:
        console.log("please select one in user");
    }
}
caseGame(1,2);
////////////////////


function caseGame(user,cpu) {
    if(cpu=="rock" || cpu=="paper" || cpu=="scissors" )
    {
    
        switch (user)
        {
            case cpu:
                console.log("draw");
            break;
            case "rock":
                if(cpu=="scissors")
                {
                    console.log("you win");
                    
                }
                else
                {
                    console.log("you fail")
                }
            break;
            case "paper":
                if(cpu=="rock")
                {
                    console.log("you win  ");
                    
                }
                else
                {
                    console.log("you fail")
                }
            break;
            case "scissors":
                if(cpu=="paper")
                {
                    console.log("you win  ");
                    
                }
                else
                {
                    console.log("you fail")
                }
            break;
            default:
            console.log("please select one in user");
        }
    
    }
    else{
        console.log("please select correctly");
    }
}