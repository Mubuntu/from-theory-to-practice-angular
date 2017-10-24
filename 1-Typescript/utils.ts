function square(x){
    return Math.pow(x,2);
}
export function patman(){
    console.log('ik ben ptrick frison');
}
function cow(){
    console.log("Moooooooh!");
}
export default function age(){
    console.log(`as of ${Date()} I am 23 years old.`)
}
export {square, cow};
// zelfde als export {square: square, cow: cow} 
// destructuring made easy
