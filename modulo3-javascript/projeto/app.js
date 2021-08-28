document.addEventListener('click', (event) => {
    const lista = Array.prototype.slice.call(event.target.classList)
    if(event.target && lista.includes('acessar-filme')){
        const url = event.target.dataset.url;
        window.open(url, '_blank')
    }
    if(event.target && lista.includes('excluir-filme')){
        const id = event.target.dataset.id;
        document.getElementById(id).remove()
    }
})

let dados = {
    titulo: '',
    ano: 0,
    categoria: '',
    link: ''
}

// Salvar os dados informados
const atualizar = () => {
    
    dados = {
        titulo: document.querySelector('#titulo').value,
        link: document.querySelector('#url').value,
        categoria: document.querySelector('#selecao').value,
        ano: document.querySelector('#ano').value
    }

    document.querySelector('[data-js="mostrar"]').innerHTML = JSON.stringify(dados);
}

// criar tabela
const listar = () => {
    const id = new Date().getTime();    
    const tr = `
        <tr id="${id}">
            <td class="align-middle">${dados.titulo}</td>
            <td class="align-middle">${dados.categoria}</td>
            <td class="align-middle">${dados.ano}</td>
            <td class="align-end">
                <button class="text-white btn btn-info acessar-filme" data-url="${dados.link}">Acessar</buttonc>
                <button class="ms-2 btn btn-danger excluir-filme" data-id="${id}">Excluir</buttonc>
            </td>
        </tr>`
            
    return tr;
} 

// mostrar as dados na tabela
const cadastrar = () => {
    document.querySelector('[data-js="tabela"]').insertAdjacentHTML('beforeEnd', listar())
    dados = {};
}
