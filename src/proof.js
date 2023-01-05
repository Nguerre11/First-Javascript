function caseGame(user,cpu) 
{
        switch (true)
        {
            case user === cpu:
                console.log("draw");
            break;
            case user=="rock" && cpu=="scissors":
                    console.log("you win");
            break;
            case user=="paper" && cpu=="rock":
                    console.log("you win");
            break;
            case user=="scissors" && cpu=="paper":
                    console.log("you win");
            break;
            default:
                if (user=="scissors"|| user=="rock" || user=="paper")
                {
                    if(  cpu=="scissors"|| cpu=="rock" || cpu=="paper")
                    {
                        console.log("you fail");
 
                    }
                    else
                    {
                        console.log("please select correctly");
                    }
                    
                }
                    
                else
                {
                    console.log("please select correctly");
                }
            }
        }
        
    