let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = (document.getElementById('height').value);
    const weight = (document.getElementById('weight').value);
    const result = document.getElementById('output');
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = ' You are Under weight : ' + bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = ' Your BMI is Normal : ' + bmi;
        }else{
            result.innerHTML = ' You are Over weight : ' + bmi;
        }
   
});
