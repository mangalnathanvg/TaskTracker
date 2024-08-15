import {fetchData, writeData} from "../utility/fileUtilities.js";

export function updateTask(id, description){
    const fileData = fetchData()
    const taskIndex = fileData.findIndex(task => task.id === id)

    if(taskIndex === -1){
        throw new Error("Task not found");
    }

    fileData[taskIndex].description = description
    fileData[taskIndex].updatedAt = Date.now().toString();

    writeData(fileData);
}