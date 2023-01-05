function solution(arraySecreto)
{
    switch(typeof arraySecreto[0])
    {
        case 'string':
            console.log(true);
        break;
        default:
            console.log(false)
    }
}
solution([1, "Gallina", "Vaca"]);
/////////////////
var list =["Pato", "Gallina", 1];
function listName(alert)
{
    console.log(alert);
}

for(var i=0 ; i<list.length; i++)
{
    listName(`Hola ${list[i]}`);
}
/////////////////////
var lines =["Patos", "Gallinas", 1, 2, 3, 4 , 11];
for(var i=3 ; i<lines.length; i+=2)
{
    console.log(`Hola ${lines[i]}`);
}
///////////////////////7
var notes =["notion", "anki", 1, 2, 3, 4 , 11];
function nombralas(value)
{
    console.log(value);
}
while( notes.length > 0)
{
    var item = notes.shift();
    nombralas(item);
}