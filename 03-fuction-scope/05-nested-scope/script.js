function first(){
    const x = 100;
    function second(){
        const y = 200;
        console.log(x + y);
    }
    //we can't access y from here
    //console.log(y);
    second();
}
first();

if (true){
    const x = 100;
    if (x === 100){
        const y = 200;
        console.log(x + y);
    }
    //we can't access y from here
    //console.log(y);
}