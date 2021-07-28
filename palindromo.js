let x = 0
let string = "casa"
let palavra = string.split("")
let novaPalavra = []

for (let i=palavra.length-1; i>=0; i--){
    novaPalavra[x] = palavra[i]
    x++
}
console.log(palavra)
console.log(novaPalavra)
let palindromo = true

for (let i=0; i< palavra.length; i++){
    if (novaPalavra[i] != palavra[i]){
        palindromo= false
    }
}
console.log(palindromo)