function geradorDeTagsDeIdentificacao(nomePet) {
    return nomePet.toUpperCase()
}


function verificarSePodeSerAdotado(idade, porte) {
    return idade === 1 && porte === 'M'
}

function calcularConsumoDeRacao(nomePet, idade, peso) {
    const consumoDiario = peso * 300
    return consumoDiario
}

function decidirTipoDeAtividadePorPorte(porte) {
  if (porte === 'pequeno') {
    return 'brincar dentro de casa'
  } else if (porte === 'medio') {
    return 'passear no parque'
  } else if (porte === 'grande') {
    return 'correr em campo aberto'
  } else {
        return console.log('porte inválido')
    }
}

async function buscarDadoAsync() {
      return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pipoca")
    }, 100)
  })
}


export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}