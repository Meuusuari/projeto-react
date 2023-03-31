import React, { useState } from 'react'

export default (props) => {
    const [numero, setNumero] = useState(Array(props.qtdeNumero).fill(0))

function gerarContido(array) {
    const min = 1
    const max = 60
    const novoNumero = parseInt(Math.random() * (max - min)) + min

    return array.includes(novoNumero) ? gerarContido(array) : novoNumero
}

function gerarNumero() {
  const novoArray = Array(props.qtdeNumero)
  .fill(0)
  .reduce(a => [...a, gerarContido(a)], [])
  .sort((a, b ) => a - b)
    setNumero(novoArray)
}






    return (
        <>
        <h3>Mega Sena</h3>
        <h4>{numero.join('  ')}</h4>
        <button onClick={gerarNumero}>Gerar Número</button>
                
        </>
    );
};
