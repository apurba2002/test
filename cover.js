import * as printJs from "print-js"
document.getElementById('c-sub-name').innerHTML = sessionStorage.getItem('subname')
document.getElementById('c-student-name').innerHTML = sessionStorage.getItem('studentname')
document.getElementById('c-job-name').innerHTML = sessionStorage.getItem('jobname')
document.getElementById('c-roll').innerHTML = sessionStorage.getItem('rollnumber')
$('#c-department').text(sessionStorage.getItem("department"))
document.getElementById('c-shift').innerHTML = sessionStorage.getItem('shift')
document.getElementById('c-teacher-name').innerHTML = sessionStorage.getItem('teachername')
$("#c-job-no").text(sessionStorage.getItem("job-no"))
$("#c-semester").text(sessionStorage.getItem("semester"))

var theme = sessionStorage.getItem('theme');

if (theme === "green") {
    document.getElementById('theme-jr').style.color = theme;
    document.getElementById('theme-jn').style.color = theme;
    document.getElementById('theme-jno').style.color = theme;
    document.getElementById('theme-sb').style.color = theme;
    document.getElementById('theme-st').style.color = theme;
    document.getElementById('theme-sg').style.color = theme;


}
else if (theme === "pink") {
    $("#theme-jr").css("color", "pink")
    $("#theme-jn").css("color", "pink")
    $("#theme-jno").css("color", "pink")
    $("#theme-sb").css("color", "pink")
    $("#theme-st").css("color", "pink")
    $("#theme-sg").css("color", "pink")

}
else if (theme === "lightblue") {
    $("#theme-jr").css("color", "lightblue ")
    $("#theme-jn").css("color", "lightblue")
    $("#theme-jno").css("color", "lightblue")
    $("#theme-sb").css("color", "lightblue")
    $("#theme-st").css("color", "lightblue")
    $("#theme-sg").css("color", "lightblue")

}
else if (theme === "brown") {
    $("#theme-jr").css("color", "burlywood")
    $("#theme-jn").css("color", "burlywood")
    $("#theme-jno").css("color", "burlywood")
    $("#theme-sb").css("color", "burlywood")
    $("#theme-st").css("color", "burlywood")
    $("#theme-sg").css("color", "burlywood")

}
else if (theme === "orange") {
    $("#theme-jr").css("color", "orange")
    $("#theme-jn").css("color", "orange")
    $("#theme-jno").css("color", "orange")
    $("#theme-sb").css("color", "orange")
    $("#theme-st").css("color", "orange")
    $("#theme-sg").css("color", "orange")

}

else if (theme === "default") {
    document.getElementById('theme-jr').style.color = "blue";
    document.getElementById('theme-jn').style.color = "blue";
    document.getElementById('theme-jno').style.color = "blue";
    document.getElementById('theme-sb').style.color = 'blue';
    document.getElementById('theme-st').style.color = "blue";
    document.getElementById('theme-sg').style.color = "blue";
}

function printForm() {
    printJS({
        printable: 'form1',
        type: 'html',
        targetStyles: ['*'],
        header: 'PrintJS - Print Form With Customized Header'
    })
}

console.log('jhj')
