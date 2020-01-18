function makebold(){
    document.getElementById('text').style.fontWeight="bold"
}
function makeitalic(){
    document.getElementById('text').style.fontStyle="italic"
}
function makeunderlined(){
document.getElementById('text').style.textDecoration="underline"
}
function changefont(){
    document.getElementById('text').style.fontFamily=document.getElementById('fonts').value
}
function changesize(){
    document.getElementById('text').style.fontSize=document.getElementById('size').value
}