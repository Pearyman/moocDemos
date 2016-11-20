var pet = {
    words: '...',
    speak: function(say) {
        console.log(say + ' ' + this.words);
    }
};

//pet.speak('Speak');


var dog = {
    words: 'wang'
};

pet.speak.call(dog, 'Speak'); // 通过call 改变pet中的this指向dog
