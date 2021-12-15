const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function appendCat(name){
  const newcats = [...cats, name];
  return newcats
}

function prependCat(name){
const newcats = [name, ...cats];
  return newcats
}
 
function removeLastCat(name){
    const newcats = cats.slice(0, cats.length - 1);
    return newcats
}

function removeFirstCat(name){
    const newcats = cats.slice(1);
    return newcats
}