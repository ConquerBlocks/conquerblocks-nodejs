console.log('Inicio del Script');

setTimeout(() => {
    console.log('Primer Timeout');
}, 3000);

setTimeout(() => {
    console.log('Segundo Timeout');
}, 0);

setImmediate(() => {
    console.log('Inmediato');
});

console.log('Fin del Script');