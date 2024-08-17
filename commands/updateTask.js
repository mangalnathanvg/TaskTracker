import {fetchData, writeData} from "../utility/fileUtilities.js";
import {isInvalidDescription, sanitizeString} from "../utility/inputUtilities.js";

export function updateTask(id, description){
    description = sanitizeString(description)

    if(isInvalidDescription(description)){
        throw new Error("Cannot update task. Invalid inputs");
    }

    const fileData = fetchData()
    const taskIndex = fileData.findIndex(task => task.id === id)

    if(taskIndex === -1){
        throw new Error("Cannot update task. Task not found");
    }

    fileData[taskIndex].description = description
    fileData[taskIndex].updatedAt = Date.now().toString();

    writeData(fileData);

    console.log(`Task with ${id} updated successfully.`);
}