import * as os from "node:os";
import crypto from 'crypto';

export function generateShortUUID(){
    const timestamp = Date.now().toString();
    const machineIdentifier = os.hostname();
    const combinedString = `${timestamp}-${machineIdentifier}`;
    const uid = crypto.createHash('sha1').update(combinedString).digest();
    const base64UID = uid.toString('base64').replace(/[^a-zA-Z0-9]/g, '');
    return base64UID.slice(0,4);
}