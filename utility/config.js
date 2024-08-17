import * as path from "node:path";

export const dataStoreFolderPath = "./data";
export const dataStoreFileName = "tasksData.json";
export const dataStoreFilePath = path.join(dataStoreFolderPath, dataStoreFileName);
export const Status = Object.freeze({
    InProgress: "in-progress",
    Todo: "todo",
    Done: "done"
});

export function isValidStatus(status){
    return Object.values(Status).includes(status);
}