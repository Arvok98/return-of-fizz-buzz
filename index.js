/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable strict */


function main() {
    $('#number-chooser').on('submit', function (evt) {
        evt.preventDefault();
        let number = $('#number-choice').val();

        for (let i = 0; i <= number; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                $('.js-results').append('<div class= \'fizz-buzz-item\'><span> fizzbuzz</span></div>');
            } else if (i % 5 === 0) {
                $('.js-results').append('<div class= \'buzz fizz-buzz-item\'><span> buzz</span></div>');
            } else if (i % 3 === 0) {
                $('.js-results').append('<div class= \'fizz fizz-buzz-item\'><span> fizz</span></div>');
            } else {
                $('.js-results').append(`<div class= 'fizz-buzz-item'><span> ${i}</span></div>`);
            }



        }


    });

}

$(main);