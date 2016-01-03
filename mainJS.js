function searchQuery(){
    var searchValue = document.getElementById("problem-search").value;
    setSOSearch(searchValue);
}
function setSOSearch(input){
    if(input.charAt(input.length - 1) == '?'){
        var replaceInput = input.replace("?", "%3F");
    }
    var SOSearchString = replaceInput.split(" ").join("+");
    var SOWebview = document.getElementById("stackoverflow-webview");
    SOWebview.src = "http://www.stackoverflow.com/" + SOSearchString;
    alert(SOSearchString);
}