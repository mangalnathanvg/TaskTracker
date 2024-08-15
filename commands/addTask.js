import {writeData, createDataStoreFileIfNotExists, fetchData} from "../utility/fileUtilities.js";
import {dataStoreFileName, dataStoreFolderPath, Status} from "../utility/config.js";
import {generateShortUUID} from "../utility/uuidGenerator.js";

export function addTasks(options){
    const { task } = options;

    if(!task){
        throw new Error("Invalid Task");
    }

    // Create data store if it doesn't exist
    createDataStoreFileIfNotExists(dataStoreFolderPath, dataStoreFileName)

    // Append JSON data to created data store file
    const data = {
        id: generateShortUUID(),
        description: task,
        status: Status.InProgress,
        createdAt: Date.now().toString(),
        updatedAt: Date.now().toString()
    }

    const fileData = fetchData();
    fileData.push(data);
    writeData(fileData);

    console.log("Task added successfully with ID: ", data.id);
}