/* eslint-disable */
export default function returnHowManyArguments(...args) {
    var cntr = 0, arg;
    for (arg of args){
        cntr += 1;
    }
    return cntr;
}
/* eslint-disable */
