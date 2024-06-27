let state = {
  name: "",
  todoList: [],
};

function getReply(command) {
  if (command.startsWith("Hello my name is ")) {
    const name = command.substring(17);
    state.name = name;

    return `Nice to meet you, ${name}.`;
  } else if (command === "What is my name?") {
    if (state.name) {
      return `Your name is ${state.name}.`;
    } else {
      return "Sorry, I do not know your name.";
    }
  } else if (command === "Add fishing to my todo") {
    state.todoList.push("Fishing");
    return "Fishing added to your todo.";
  } else if (command === "Add singing in the shower to my todo") {
    state.todoList.push("Singing in the shower");

    return "Singing in the shower added to your todo.";
  } else if (command.startsWith("Remove ")) {
    const removeItem = command
      .substring(7, command.indexOf(" from my todo"))
      .trim();
    const index = state.todoList.indexOf(removeItem);

    if (index !== -1) {
      state.todoList.splice(index, 1);
      return `Removed ${removeItem} from your todo.`;
    } else {
      return `${removeItem} is not in your todo.`;
    }
  } else if (command === "What is on my todo?") {
    if (state.todoList.length === 0) {
      return "There is nothing in your todo.";
    } else {
      const todoItems = state.todoList.join(" and ");

      return `You have ${state.todoList.length} activity(ies) - ${todoItems}.`;
    }
  } else if (command === "What day is it today?") {
    const today = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = today.toLocaleDateString("en-US", options);

    return `Today is ${formattedDate}.`;
  } else if (command.startsWith("what is ")) {
    const mathExpression = command.substring(8).trim();
    const result = eval(mathExpression);

    return `Result of ${mathExpression} is ${result}.`;
  } else if (command.startsWith("Set a timer for ")) {
    const timeInMinutes = parseInt(command.substring(16));
    if (!isNaN(timeInMinutes)) {
      setTimeout(() => {
        console.log("Timer done.");
      }, timeInMinutes * 60 * 1000);

      return `Timer set for ${timeInMinutes} minutes.`;
    } else {
      return "Can't set timer. Please provide a valid time in minutes.";
    }
  } else {
    return "Enter correct data.";
  }
}

console.log(getReply("Hello my name is Benjamin")); 
console.log(getReply("What is my name?")); 
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo")); 
console.log(getReply("Remove fishing from my todo")); 
console.log(getReply("What is on my todo?")); 
console.log(getReply("What day is it today?")); 
console.log(getReply("what is 3 + 3")); 
console.log(getReply("Set a timer for 4 minutes")); 


