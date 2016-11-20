var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

life.setMaxListeners(11);

function water(who) {
    console.log('给' + who + '倒水');
}
life.on('求安慰', water);
life.on('求溺爱', water);

// var hasConfortListener = life.emit('求安慰', '汉子');

life.removeAllListeners('求安慰'); //移除监听

console.log(life.listeners('求安慰').length); //剩下事件的监听数量

console.log(EventEmitter.listenerCount(life, '求安慰'));

// console.log(hasConfortListener);

life.emit('求安慰', '汉子');
