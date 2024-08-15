import fs from 'fs';
import * as path from "node:path";
import {dataStoreFilePath} from "./config.js";

export function createDataStoreFileIfNotExists(folderPath, fileName){
    if(!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath, {recursive: true});
    }

    const filePath = path.join(folderPath, fileName)

    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '')
    }
}

export function writeData(data){
    fs.writeFileSync(dataStoreFilePath, JSON.stringify(data, null, 2));
}

export function fetchData(){
    let fileData = [];

    if(fs.existsSync(dataStoreFilePath)){
        const jsonData = fs.readFileSync(dataStoreFilePath, 'utf8');
        if(jsonData){
            fileData = JSON.parse(jsonData);
        }
    }

    return fileData;
}