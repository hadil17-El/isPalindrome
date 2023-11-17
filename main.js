function palinCheck() {
    var str1 = document.getElementById("input").value.toLowerCase();
    var str = str1.replace(/\s/g,"");
    if(isPalindrome(str)===true) {
        document.getElementById("par").innerHTML = `<b>"${str}"</b> is a palindrome!.`;
        document.getElementById("input").value ="";
    }
    else 
    document.getElementById("par").innerHTML = `<b>"${str}"</b> is not a palindrome!.`
}
function isPalindrome(str1) {
    for(let i = 0 ; i<Math.floor(str1.length / 2); i++)
    {
        var char1=str1[i],char2=str1[str1.length - 1 - i];
        if( char1 !== char2)
        {
            return false;
        }
    }
    return true;
}
function reset(){
    document.getElementById("input").value="";
    document.getElementById("par").innerHTML="";
}