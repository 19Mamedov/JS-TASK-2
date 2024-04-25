// A=>ay
// B=>mebleg
// C=>emek haqqi
// D=> musteriye dusen maksimal mebleg
// G=> ayliq odenis
// F=> ayliq emek haqqinin 45%-i
// 3000 azn mebleg size 15%le 16 ay muddetine  ayliq 345 manat odenishle veririlir 
// faiz=> Musterinin faizle odeyeceyi mebleg
let faiz
let a
let b
let c
function bank(a,b,c) {
    let d = c * 10
    let g = b / a
    let f = c * 0.45
    if(a>35 && d  < b && f > g) {
        console.log("Size kredit dusmur!");
    }
    else {
        if(a<=12 && a>0) {
           faiz  = ( b * 0.13 ) + b
           let arr = ["SIZE" ,b,"AZN MEBLEGI SIZE 13%-le", a , "MUDDETINE AYLIQ", g , "MANAT ODENISLE VERILIR" ]
           let newArr = arr.join(" ")
           console.log(newArr);
           
        }
        else if (a>12 && a<=24 ) {
            faiz  = ( b * 0.15 ) + b
            let arr = ["SIZE" ,b,"AZN MEBLEGI SIZE 15%-le", a , "MUDDETINE AYLIQ", g , "MANAT ODENISLE VERILIR"]
            let newArr = arr.join(" ")
            console.log(newArr);

        }
       else {
        faiz  = ( b * 0.17 ) + b
        let arr = ["SIZE" ,b,"AZN MEBLEGI SIZE 17%-le", a , "MUDDETINE AYLIQ", g , "MANAT ODENISLE VERILIR"]
        let newArr = arr.join(" ")
        console.log(newArr);

       }


        
    }

    
}

bank(6,2000,5000)


