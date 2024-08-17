import {fetchData, writeData} from "../utility/fileUtilities.js";

export function deleteTask(id){
    let fileData = fetchData()

    const taskIndex = fileData.findIndex(task => task.id === id)

    if(taskIndex === -1){
        throw new Error("Cannot delete. Task not found.");
    }

    fileData = fileData.filter(task => task.id !== id);
    writeData(fileData)

    console.log(`Task deleted successfully.`);
}