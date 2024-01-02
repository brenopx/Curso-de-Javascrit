function* geradora1() {
//  Código Qualquer
    yield 'Valor 1';
//  Código Qualquer
    yield 'Valor 2';
//  Código Qualquer
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next().value);

for (let valor of g1) {
    console.log(valor)
}

function* geradora2_contador() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}
const g2 = geradora2_contador();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);


function* geradora3 () {
    yield 0;
    yield 1;
    yield 3;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
    console.log(valor)
}


function* geradora5() {
    yield function() {
        console.log('yield 1')
    }
    return function() {
        console.log('return')
    }
    //  Código Qualquer
    yield function() {
        console.log('yield 2')
    }
    //  Código Qualquer
    yield function() {
        console.log('yield 2')
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;
func1();
func2();
func3();