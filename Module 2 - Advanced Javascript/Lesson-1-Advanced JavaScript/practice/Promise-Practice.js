// 1.   What is the order of output?
setTimeout(() => {
    console.log('a');
}, 10);
console.log('b');

new Promise( (res,rej) => {res('c')}).then((val) => console.log('d', val));
console.log('e');

setTimeout(() => {
  console.log('f');
}, 0);

setTimeout(() => {
    console.log('g');
}, 20);

new Promise( (res) => {res('h')}).then(res => console.log(res, 'i'))


// 2.   Create a new promise for something you may or may not do. 
//      After a few seconds log whether it has been done.


// 3.   Using the prior example use .then and .catch to handle responses and rejections



// 4.   What does a promise resolve to?



// 5. What is the output of the following code?


const promise = new Promise(res => res(2));
promise.then(v => {
    console.log(v);
    return v * 2;
})
.then(v => {
    console.log(v);
    return v * 2;
})
.then(v => {
    console.log(v);
    return v * 2;
})
.then((v) => {
    console.log(v);
  });

