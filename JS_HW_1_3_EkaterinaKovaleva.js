
const chekAge = function(age_1) {

    let age_2 = 18;
    let age_3 = 60;

    if (typeof(age_1) != 'number') {
        if (age_1 === '2') {
            let age_1 = 2
            console.log('You don’t have access cause your age is ' + age_1 + '.' + ' It’s less then 18');
        }
        else console.log('Error') 
            
    }
    else if (age_1 < age_2) {
        console.log('You don’t have access cause your age is ' + age_1 + '.' + ' It’s less then 18');
    }
    else if (age_1 >= age_2 && age_1 < age_3) {
        console.log('Welcome!')
    }
    else if (age_1 >= age_3) {
        console.log('Keep calm and look Culture channel')
    }
}

chekAge('2') 


