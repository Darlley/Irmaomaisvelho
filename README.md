# ANOTAÇÕES

**1.** Além de criar arrays e objetos literais podemos combinar esses tipos primitivos para gerar estruturas mais complexas como uma array de objetos:

const variável = [
	{ propriedade: valor}
]
variavel[0].propriedade // valor

Enquanto acessamos os valores de um array por indexes enumeros podemos acessar os valores de um objetos pelo nome da propriedade.

**2.** O JavaScript tem tipagem dinâmica: basta declarar uma variável com determinado valor (const variável = valor) sem precisar especificar qual o tipo primitivo deste valor.

Operadores Aritméticos: 
(adição) +
(subtração) -
(divisão) /     
(multiplicação) *
(módulo) %
(exponenciação) **

valor++ (pós-incremento)   ++valor (pré-incremento)
valor-- (pós-decremento)    --valor (pré-decremento)

O pós-incremento/decremento mostra o valor e somente depois adiciona +1
O pré-incremento/decremento adiciona +1 e já mostra o resultado

**3.** O operador = é de atribuição de valores a variáveis, e ==, >=, <= != é operador de comparação entre valores, e ===, !== é operador de comparação do tipo de valores . Operadores de Comparação sempre retornam um booleano.
