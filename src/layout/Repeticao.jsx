import React from 'react'

import Produtcts from '../data/Produtcts' 

export default props => {

    function getProdutosListItem() {
        return Produtcts.map(prod => {
            return <li key={prod.id}>
            {prod.id} - {prod.nome} - R$ {prod.preco}
            </li>
        })
    }
    return (
        <div>
        <h2>Repetição</h2>
        <ul>
        {getProdutosListItem()}
        </ul>
        </div>
    )
}