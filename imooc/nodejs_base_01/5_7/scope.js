var globalVariable = 'this is global variable';

function globalFunction() {
    var localVariable = 'this is local variable';
    // console.log('visit gloal/local variable');
    // console.log(localVariable);
    // console.log(globalVariable);

    // glovalVariable = 'this is changed';
    // console.log(localVariable);

    function localFunction() {
        var innerLocalVariable = 'this is inner local variable';
        console.log('visit global/local/innerLocalVariable');
        console.log(innerLocalVariable);
        console.log(localVariable);
        console.log(globalVariable);
    }
    localFunction();
}

globalFunction();
