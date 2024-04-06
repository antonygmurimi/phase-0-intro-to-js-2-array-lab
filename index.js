// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
      cats.push('Ralph')
      
  };
 
  function destructivelyPrependCat(name) {
    cats.unshift(name)
    
};

function destructivelyRemoveLastCat() {
    cats.pop()
    
};
function destructivelyRemoveFirstCat() {
    cats.shift()
    
};

function appendCat(name){
   
    const newCats = [...cats, name]
    return newCats

}
function prependCat(name){
    const newCats  = [name, ...cats]
    
    return newCats
    
   
}
//removes the last cat without changing the array
function removeLastCat() {
    const newCats = cats.slice(0,-1)
    
    return newCats
}

//removes first cat leaving the cats array uncanged
function removeFirstCat() {
    const newCats =cats.slice(1);
    
    return newCats
}
