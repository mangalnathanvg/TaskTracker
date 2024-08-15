import * as path from "node:path";

export const dataStoreFolderPath = "./data";
export const dataStoreFileName = "tasksData.json";
export const dataStoreFilePath = path.join(dataStoreFolderPath, dataStoreFileName);
export const Status = Object.freeze({
    InProgress:   Symbol("in-progress"),
    Todo:  Symbol("todo"),
    Done: Symbol("done")
});