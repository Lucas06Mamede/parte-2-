const nomes = ["Lucas", "Joabe", "Vitor", "Bruno", "Gustavo", "Davi", "João"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
