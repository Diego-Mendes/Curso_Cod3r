const obj = {0: 'nome', 1:'idade', 2:'nacionalidade'}

Object.defineProperties(obj, 'Inpush', {
    value: function(x){obj.push(x)},
    enumerable: false
})

obj.Inpush('altura')
console.log(obj)

//Não deu bom kkkkkkkk