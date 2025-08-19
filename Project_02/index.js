const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#height').value);
    const result = document.querySelector('#result');

    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        result.innerHTML = `<span>${bmi}</span>`;

        if(bmi < 18.5) {
            result.innerHTML = `${bmi} and you are underweight.`;
        } 
        
        else if(bmi >= 18.5 && bmi < 24.9) {
            result.innerHTML = `${bmi} and you have a normal weight.`;
        } 
        
        else if(bmi >= 25 && bmi < 29.9) {
            result.innerHTML = `${bmi} and you are overweight.`;
        } 
        
        else {
            result.innerHTML = `${bmi} and you are obese.`;
        }
    }



});