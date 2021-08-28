const pretag = document.getElementById("debug")
document.getElementById('buscar').addEventListener('click', (event) => {
    event.preventDefault()
    const cep = document.getElementById('cep').value;
    const retorno = fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
            const dado = JSON.stringify(data)
            pretag.insertAdjacentHTML('beforeEnd', `
                <p>Endereço: ${data.logradouro}, ${data.bairro}, ${data.localidade}</p>
            `)
        })
})