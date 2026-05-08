//Utilizado para filtrar um elemento dentro de um array. Retorna apenas o encontrado

const numeros = [5, 10, 14];

const encontrado = numeros.filter((n) => {
    return n == 10;
});

// console.log(encontrado);

const estoque = [
    {
        descricao : "Camisa Polo",
        cor : "Verde",
        perfil : "M",
        quantidade : 10
    },
    {
        descricao : "Camisa Polo",
        cor : "Amarela",
        perfil : "F",
        quantidade : 15
    },
    {
        descricao : "Camisa Polo",
        cor : "Azul",
        perfil : "M",
        quantidade : 30
    },
    {
        descricao : "Camisa Polo",
        cor : "Roxa",
        perfil : "F",
        quantidade : 5
    }
];


const camisetasFemininas = estoque.filter((camiseta) => {
    return camiseta.perfil == "F";
});

console.log(camisetasFemininas);


console.log("Camisetas Polo Femininas em estoque: ");
console.log()

camisetasFemininas.forEach((item) => {
        console.log(`${item.cor}: ${item.quantidade} unidade(s)`)
});