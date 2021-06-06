
const obj = { a: 1, b:2, soma(){return a+b}} //Objeto

console.log(JSON.stringify(obj)) //converte para json (apenas texto)

console.log(JSON.parse('{"a": 1, "b": 2, "c": "strings", "d": {}, "e": []}')) //converte para objeto (atente para as aspas)