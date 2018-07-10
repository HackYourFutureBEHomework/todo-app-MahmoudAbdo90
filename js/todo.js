let TODOS = [];

function update() {
    const $ul = document.querySelector('.todo-list');
    $ul.innerHTML = "";
    
    for(const item of TODOS){
        const $li = document.createElement('li');
        $ul.appendChild($li);
        if(item.done){
            $li.setAttribute('class', 'completed');
        }
        const $input = document.createElement('input')
        $input.setAttribute('class', 'toggle');
        $input.setAttribute('type', 'checkbox');
        if (item.done) {
            $input.setAttribute('checked', 'checked');
        }
        $input.addEventListener('change', funToggle.bind(null, item.id));
        $li.appendChild($input);

        const $label = document.createElement('label');
        $label.innerHTML = item.title;
        $li.appendChild($label);

        const $button = document.createElement('button');
        $button.setAttribute('class', 'destroy');
        $li.appendChild($button);
    } 
    document.querySelector('.main').style.display = 'block';
}

function doNewToDo(e) {
    const title = e.target.value
    console.log(title);
    TODOS.push({
        id: Date.now(),
        title,
        done: false
    });
    update();
    e.target.value = "";
}

function funToggle(id){
    const todo = TODOS.find(function(todo){
        return todo.id === id;
    });
    todo.done = !todo.done;
    update();
}

const newTodo = document.querySelector('.new-todo');
newTodo.addEventListener('change', doNewToDo);



