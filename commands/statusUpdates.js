import {fetchData, writeData} from "../utility/fileUtilities.js";
import {Status} from "../utility/config.js";

export function markInProgress(id){
    markStatus(id, Status.InProgress);
}

export function markDone(id){
    markStatus(id, Status.Done);
}

export function markTodo(id){
    markStatus(id, Status.Todo);
}

function markStatus(id, status){
    let fileData = fetchData();

    const taskIndex = fileData.findIndex(task => task.id === id)

    if(taskIndex === -1){
        throw new Error(`Cannot mark task as ${status}. Task not found.`);
    }

    const taskToMark = fileData[taskIndex];
    if(taskToMark.status !== status) {
        taskToMark.status = status;
        writeData(fileData)
    }

    console.log(`Task status set to ${status} successfully.`);
}