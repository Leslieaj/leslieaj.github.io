function showBib(s) {
    var x = document.getElementById("myBib"+s);
    if (x.style.display !== 'block') {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

const date = document.lastModified; 
document.getElementById("last-modify").innerHTML = 'Last modified on ' + date;