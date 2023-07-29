function caculate(){
    let cm = document.getElementById("cm").value;
    let kg = document.getElementById("kg").value;
    let BMI = kg/(cm*cm);
    BMI = BMI.toFixed(2);
    document.getElementById("BMI").value = BMI;

    if (BMI < 18.5){
        document.getElementById("ans").value = "Too skinny";}
    else if (18.5 <= BMI && BMI < 24){
        document.getElementById("ans").value = "Avg";}
    else if (24 <= BMI && BMI< 27) {
        document.getElementById("ans").value = "Above Avg a bit but no worries";}
    else if (27 <= BMI && BMI< 30) {
        document.getElementById("ans").value ="A little high better watch out";}
    else if (30 <= BMI && BMI < 35){
        document.getElementById("ans").value ="Middle obesity";}
    else {
        document.getElementById("ans").value ="Extreme obesity !";}
    }