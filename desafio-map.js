const carrinho= ['{"nome": "borracha", "preço": 3.45}',
'{"nome": "caderno", "preço": 13.90}',
'{"nome": "kit de lápis", "preço": 41.22}',
'{"nome":"caneta", "preço": 7.50}'
]

// retornar um  array apenas com preços
const paraObjeto = json => JSON.parse(json)
const apenasProdutos= produto => produto.preço

const preco= carrinho.map(paraObjeto).map(apenasProdutos) // se comentar o segundo o array fica completo
console.log(preco)