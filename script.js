// Taking value from the input
var btnclick = document.querySelector("#add");

btnclick.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    
    var statistics = document.querySelector("#Statistics").value;
    var DBMS = document.querySelector("#DBMS").value;
    var DSA = document.querySelector("#DSA").value;
    var microprocessor = document.querySelector("#microprocessor").value;
    var webtechnology = document.querySelector("#Webtechnology").value;
    var SAD = document.querySelector("#SAD").value;

    var grade = "";

    // converting them into float
    statistics = parseFloat(statistics);
    DBMS = parseFloat(DBMS);
    DSA = parseFloat(DSA);
    microprocessor = parseFloat(microprocessor);
    webtechnology = parseFloat(webtechnology);
    SAD = parseFloat(SAD);

    // adding obtained marks by student
    var obtainedgrade = statistics + DBMS + DSA + microprocessor + webtechnology + SAD;

    var percentage = (obtainedgrade / 600) * 100;

    if (percentage <= 100 && percentage >= 90) {
        grade = "A";
    }
    else if (percentage < 90 && percentage >= 80) {
        grade = "A-";
    } 
    else if (percentage < 80 && percentage >= 75) {
        grade = "B+";
    } 
    else if (percentage < 75 && percentage >= 70) {
        grade = "B-";
    } 
    else if (percentage < 70 && percentage >= 60) {
        grade = "C+";
    }
    else if (percentage < 60 && percentage >= 50) {
        grade = "C-";
    } 
    else {
        grade = "D";
    }

    // displaying the result in the output
    document.querySelector("#result").innerHTML = 
        `<h1 class="sgc">Result</h1>
         <p>Your grade is ${grade} and your percentage is: ${percentage}%</p>`;
});