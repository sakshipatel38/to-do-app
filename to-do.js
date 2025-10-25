console.log("to-do app is running");
let todo=[];
let req = prompt("what do you want to do today?");
while(true){
    if(req == 'quit'){
        console.log("quitting the app");
        break;
    }
    else if (req == 'list'){
        if(todo.length == 0){
            console.log("your to-do list is empty");
        }
        else{
            req = prompt("what do you want to do today?");
            console.log("------------");
            for (let i = 0;i<todo.length;i++)
                {
                    console.log(`${i}: ${todo[i]}`);
                }
            console.log("------------");
            }
    }
    else if (req == 'add'){
        let add = prompt("enter the to-do item:");
        todo.push(add);
        console.log(`${add} added to the list `);
    }

    else if (req == 'delete'){
        let idx = prompt("enter the index of item to be deleted:");
        todo.splice(idx,1);
        console.log(`item at index ${idx} deleted`);
    }

    else{
        console.log("unknown request");
    }

    req = prompt("what do you want to do today?");
}