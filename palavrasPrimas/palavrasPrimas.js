function numeroPrimo(n){
    let contDiv = 0

    for (let i = 0; i <= n; i++){
        if (n%i==0){
            contDiv = contDiv +1
        }    
    }
    if (contDiv != 2){
        console.log ('Numero não é primo')
    } else {
        console.log ('Numero é primo')
    }
}

dicionario = {}
let ascMinuscula = 97
let valorLetra = 1
let ascMaiuscula = 65

for (let i = 0; i < 26; i++){
    let letra = String.fromCharCode(ascMinuscula)
    dicionario[letra] = valorLetra
    ascMinuscula++
    valorLetra++
}

for (let i = 0; i < 26; i++){
    let letra = String.fromCharCode(ascMaiuscula)
    dicionario[letra] = valorLetra
    ascMaiuscula++
    valorLetra++
}

let palavra = 'SOL'
let soma = 0

for (let i = 0; i< palavra.length; i++){
    let letra = palavra[i]
    let valor = dicionario[letra]
    soma = soma + valor
}
console.log(soma)
numeroPrimo(soma)

