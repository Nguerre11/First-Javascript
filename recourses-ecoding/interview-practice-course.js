
function Present(name,lastname,nickname)
{
    const completeName = name + " " + lastname;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");   

}
Present("nicolas","guerrero","nicolukas");
/////////////////////////////////////////////////
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion=="Free") 
    {
        console.log("Solo puedes tomar los cursos gratis");

    }
    else if(tipoDeSuscripcion == "Basic")
    {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");

    }
   else if(tipoDeSuscripcion=="Expert") 
   {
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");

   }
    else if  (tipoDeSuscripcion =="ExpertPlus")
    {
        
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
/////////////////////////////////////////

if (tipoDeSuscripcion=="Free") 
    {
        console.log("Solo puedes tomar los cursos gratis");

    }
    if(tipoDeSuscripcion == "Basic")
    {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");

    }
    if(tipoDeSuscripcion=="Expert") 
   {
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");

   }
     if  (tipoDeSuscripcion =="ExpertPlus")
    {
        
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
    ///////////////////////////////////
    let i=0;
    while(i< 5)
    {
        console.log("El valor de i es: " + i);
        i++;
    }
     i=10;
    while(i >= 2)
    {
        console.log("El valor de i es: " + i);
        i--;
    }
    ////////////////////////////////////
    let number = prompt("What is the result of 2 + 2 ?");
    if(number==4){
        console.log("good answer!");
    }
    else
    {
        console.log("you're wrong");
    }
    ///////////////////////
    var myArray = ["nico" ,"samu" ,"raul", "david", "mariana"];
    function solution()
    {
        for ( array of myArray)
        {
            console.log(array);
        }
    }
    /////////////////////////////////////
    let myCar={
        name:"ford",
        color:"blue",
        age:1969
    };
    for(Object in myCar)
    {
        console.log(myCar[Object]);
    }
    /////////////////////////////////////////77
