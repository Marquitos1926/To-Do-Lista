// Obtém referências ao campo de entrada, botão e lista de tarefas
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// Adiciona um listener de evento de clique ao botão "Adicionar Tarefa"
addTaskButton.addEventListener('click', function() {
    // Obtém o valor do campo de entrada, removendo espaços em branco
    const taskText = taskInput.value.trim();

    // Verifica se a entrada não está vazia
    if (taskText !== '') {
        // Chama a função addTask para criar uma nova tarefa
        addTask(taskText);
        // Limpa o campo de entrada
        taskInput.value = '';
    }   
});

// Função para adicionar uma nova tarefa à lista de tarefas
function addTask(taskText) {
    // Cria um novo item de lista para a tarefa
    const listItem = document.createElement('li');
    listItem.className = 'task-item'; // Define a classe para estilização

    // Cria um elemento span para conter o texto da tarefa
    const taskElement = document.createElement('span');
    taskElement.className = 'task-text'; // Corrigido: usar className em vez de classContent
    taskElement.textContent = taskText; // Define o texto da tarefa

    // Cria um botão de edição
    const editButton = document.createElement('button');
    editButton.className = 'edit-task'; // Define a classe para estilização
    editButton.textContent = 'Editar'; // Define o texto inicial do botão como "Editar"

    // Cria um botão de remoção
    const removeButton = document.createElement('button');
    removeButton.className = 'remove-task'; // Define a classe para estilização
    removeButton.textContent = 'Remover'; // Define o texto do botão como "Remover"

    // Adiciona um listener de evento de clique ao botão de remoção
    removeButton.addEventListener('click', function() {
        taskList.removeChild(listItem); // Remove a tarefa da lista
    });

    // Adiciona um listener de evento de clique ao botão de edição
    editButton.addEventListener('click', function() {
        // Se o texto do botão for "Editar"
        if (editButton.textContent === 'Editar') {
            taskElement.contentEditable = true; // Torna o texto da tarefa editável
            taskElement.focus(); // Foca no texto da tarefa
            editButton.textContent = 'Salvar'; // Muda o texto do botão para "Salvar"
        } else {
            taskElement.contentEditable = false; // Torna o texto da tarefa não editável
            editButton.textContent = 'Editar'; // Muda o texto do botão de volta para "Editar"
        }
    });

    // Adiciona o texto da tarefa, botão de edição e botão de remoção ao item da lista
    listItem.appendChild(taskElement);
    listItem.appendChild(editButton);
    listItem.appendChild(removeButton);
    
    // Adiciona o item da lista à lista de tarefas
    taskList.appendChild(listItem);
}


taskInput.addEventListener('kaypress', function(event){
    //Verifica se a tecla pressionada é enter
    if (event.key === 'Enter'){
        addTaskButton.click(); // adiciona o clique no boptrão de adicionar tarefa
    }
});
