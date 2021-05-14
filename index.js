let cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function destructivelyAppendCat(String){
    cats.push(String);
}

function destructivelyPrependCat(String){
    cats.unshift(String);
}

function destructivelyRemoveFirstCat(String){
    cats.shift();
}

function destructivelyRemoveLastCat(String){
    cats.pop();
}

function removeFirstCat(){
    cats.splice(0,1);
}

function removeLastCat(){
    cats.splice(-1,1);
}

function appendCat(){
    
}

function prependCat(){

}