function laCajaDePandora(numero){
    if (numero%2===0 ) {
        return numero.toString(2)
    } else if (numero%2===1) {   
        return numero.toString(16).toUpperCase()
    }
}