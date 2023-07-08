let input=prompt("what would you like to do?");
const todos=['Collect Chicken Eggs','Clean Litter Box'];
while(input!=='quit' && input!='q'){
    if(input==='list'){
        console.log('******************');
        for(let i=0;i<todos.length;i++){
            console.log(`${i}: ${todos[i]}`);//String literals in For Loop.
        }
        console.log('******************');
    }
    else if(input==='new'){
        const newTodo=prompt("Ok,What is the new Todo");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }
    else if(input==='delete'){
        const index=prompt("Ok,Enter an index to delete");
        const deleted=todos.splice(index,1);
        console.log(`Ok deleted ${deleted}`);
    }
    input=prompt("what would you like to do");
}
console.log("OK QUIT THE APP!");