const btn = document.querySelector('.btn');
const btnrgb = document.querySelector('.btnrgb');
const color=document.querySelector('.color');
const submit= document.querySelector('.submit');
let prevcolor;
const hex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]

btn.addEventListener("click",function(){
let hexcolor = "#";
for(let i=0;i<6;i++){
    hexcolor += hex[getRandom()];
}
color.textContent = hexcolor;
document.body.style.backgroundColor = hexcolor;
});

btnrgb.addEventListener("click",function(){
    let rgbcolor = "rgb(";
    for(let i=0;i<2;i++){
        rgbcolor += rgbRandom();
        rgbcolor += ",";
    }
    rgbcolor += rgbRandom();
    rgbcolor += ")";
    color.textContent = rgbcolor;
    document.body.style.backgroundColor = rgbcolor;
    });

submit.addEventListener("click",function(){
    let txtcolor = document.getElementById("userip").value;
        prevcolor=document.body.style.backgroundColor;
        document.body.style.backgroundColor = txtcolor;
        if(document.body.style.backgroundColor == prevcolor)
        {
            alert('Oops!! You Entered a wrong input')
            color.textContent = prevcolor;
            document.body.style.backgroundColor = prevcolor;
        }
        else{
            prevcolor=txtcolor;
            color.textContent = txtcolor;
        }
    });

function rgbRandom()
{
    return Math.floor(Math.random() * 256);
}
function getRandom()
{
    return Math.floor(Math.random() * hex.length);
}