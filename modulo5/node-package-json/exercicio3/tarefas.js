const tarefas = ["lavar a louça", "comprar leite"]
const novaTarefa = process.argv[2]

tarefas.push(novaTarefa)

console.log("Tarefa adicionada")

console.table(tarefas)
