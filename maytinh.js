function cong() {
let num1 = +document.getElementById ("num1"). value;
let num2 = +document.getElementById ("num2"). value;
let resuft = " ket qua la " + (num1 + num2);
document.getElementById ("resuft").innerHTML = resuft
}
function tru() {
    let num1 = +document.getElementById ("num1"). value;
    let num2 = +document.getElementById ("num2"). value;
    let resuft = " ket qua la " + (num1 - num2);
    document.getElementById ("resuft").innerHTML = resuft
    }
    function nhan() {
        let num1 = +document.getElementById ("num1"). value;
        let num2 = +document.getElementById ("num2"). value;
        let resuft =  " ket qua la " + num1 * num2;
        document.getElementById ("resuft").innerHTML = resuft
        }
        function chia() {
            let num1 = +document.getElementById ("num1"). value;
            let num2 = +document.getElementById ("num2"). value;
            let resuft = " ket qua la " + num1 / num2;
            document.getElementById ("resuft").innerHTML = resuft
            }