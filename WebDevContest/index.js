let input='';
let oprtr='';
let result=0;

function insert(val){
    input+=val;
    displaycont();
}
function operation(opr){
    oprtr=opr;
    result=input;
    cleardisplay();
}
function calculateres(){
    if (oprtr==='+'){
        result+=input;
    }
    else if (oprtr==='-'){
        result-=input;
    }
    else if (oprtr==='*'){
        result*=input;
    }
    else if (oprtr==='/'){
        result/=input;
    }
input = result.toString();
displaycont()
}
function cleardisplay(){
    input='';
    oprtr='';
    result='';
    displaycont()
}
function displaycont() {
    document.getElementById('display').value = input;
}

