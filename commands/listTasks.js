import {fetchData} from "../utility/fileUtilities.js";
import {isValidStatus} from "../utility/config.js";
import {Console} from 'console';
import {Transform} from 'stream';

function table(input) {
    // @see https://stackoverflow.com/a/67859384
    const ts = new Transform({
        transform(chunk, enc, cb) {
            cb(null, chunk)
        }
    })
    const logger = new Console({stdout: ts})
    logger.table(input)
    const table = (ts.read() || '').toString()
    let result = '';
    for (let row of table.split(/[\r\n]+/)) {
        let r = row.replace(/[^┬]*┬/, '┌');
        r = r.replace(/^├─*┼/, '├');
        r = r.replace(/│[^│]*/, '');
        r = r.replace(/^└─*┴/, '└');
        r = r.replace(/'/g, ' ');
        result += `${r}\n`;
    }
    console.log(result);
}

export function list(status) {

    if (!isValidStatus(status)) {
        throw new Error(`Cannot list tasks. Invalid status provided - ${status}`)
    }

    const fileData = fetchData()

    const filteredDataByStatus = fileData.filter(task => task.status === status);

    if (filteredDataByStatus.length < 1) {
        console.log("No Tasks to Display");

    } else {
        table(filteredDataByStatus)
    }
}

export function listAll() {
    const fileData = fetchData()
    if (fileData.length < 1) {
        console.log("No Tasks to Display");

    } else {
        table(fileData)
    }
}