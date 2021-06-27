const Jsimples = ( c, i=0.03, t=1) => c*i*t
const Jcomposto = (c, i=0.03, t=1) => c * (1+i)**t

console.log(Jsimples(1200, 0.02, 6).toFixed(2))
console.log(Jcomposto(1200, 0.02, 6).toFixed(2))

console.log(Jsimples(1000, 0.05, 12).toFixed(2))
console.log(Jcomposto(1000, 0.05, 12).toFixed(2))
