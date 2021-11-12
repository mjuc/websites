var list = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var exitSpan = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    exitSpan.className = "close";
    exitSpan.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}