//aqui sao só as funcoes a serem executadas por routes.js
const helloWorld = ()=>{
    return 'Hello World da funcao'
}

const getAll = (request, h) => {
    return 'Hello World'
}

const save = () => {
    return 'Oi'
}

module.exports = {
    helloWorld,
    getAll,
    save
}