import {writeData, createDataStoreFileIfNotExists, fetchData} from "../utility/fileUtilities.js";
import {dataStoreFileName, dataStoreFolderPath, Status} from "../utility/config.js";
import {generateShortUUID} from "../utility/uuidGenerator.js";
import {isInvalidDescription, sanitizeString} from "../utility/inputUtilities.js";

export function addTasks(description){

    description = sanitizeString(description)

    if(isInvalidDescription(description)){
        throw new Error("Cannot create task. Invalid inputs");
    }

    // Create data store if it doesn't exist
    createDataStoreFileIfNotExists(dataStoreFolderPath, dataStoreFileName)

    // Append JSON data to created data store file
    const data = {
        id: generateShortUUID(),
        description: description,
        status: Status.Todo,
        createdAt: Date.now().toString(),
        updatedAt: Date.now().toString()
    }

    const fileData = fetchData();
    fileData.push(data);
    writeData(fileData);

    console.log("Task added successfully with ID: ", data.id);
}