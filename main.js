function caculate(){
    let cm = document.getElementById("cm").value;
    let kg = document.getElementById("kg").value;

    if (cm == null || cm =="" && kg == null || kg ==""){
            alert("Please input your value");
    }

    else{
        let bmi = kg/(cm**2);   
        bmi = bmi.toFixed(2);
        document.getElementById("bmi").value = bmi;

        if (bmi < 18.5){
            document.getElementById("ans").value = "Too skinny";}
        else if (18.5 <= bmi && bmi < 24){
            document.getElementById("ans").value = "Avg";}
        else if (24 <= bmi && bmi< 27) {
            document.getElementById("ans").value = "Above Avg a bit but no worries";}
        else if (27 <= bmi && bmi< 30) {
            document.getElementById("ans").value = "A little high better watch out";}
        else if (30 <= bmi && bmi < 35){
            document.getElementById("ans").value = "Middle obesity";}
        else if(bmi>=35) {
            document.getElementById("ans").value = "Extreme obesity !";}
    }
}