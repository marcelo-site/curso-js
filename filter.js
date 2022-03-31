const produtos = [
    { nome: 'Notebook', preco: 2500, fragil: true},
    { nome: 'Ipad Pro', preco: 4200 , fragil: true},
    { nome: "copo de vidro", preco: 9.90, fragil: true},
    { nome: "copo de plastico", preco: 5.90, fragil: false}
]

console.log(produtos.filter(function(preco){
}))
const caro = produtos => produtos.preco >500;
const mole= produtos => produtos.fragil;
produtos.filter(caro).filter(mole)
const res= produtos.filter(caro).filter(mole)
console.log(res)