import { access, accessSync, constants } from "node:fs";
import { access as accessAsync } from "node:fs/promises";

/**
 *
 * Test the accessibility of the path in synchronous, callback based asynchronous and promise based asynchronous way.
 *
 */
export class FileAccess {
    /**
     * Check if given path is accessible to the user which has started this process in a synchronous manner.
     * @param path path of the file.
     */
    public isAccessibleSync(path: string): boolean {
        try {
            accessSync(path, constants.F_OK | constants.R_OK | constants.W_OK);
            return true;
        } catch (err) {
            console.log(err);
            console.log(`Either file doesn't exist,or User doesn't have the read and write.`);
            return false;
        }
    }

    /**
     * Check if given path is accessible to the user which has started this process in a callback based asynchronous manner.
     * @param path path of the file.
     */
    public isAccessibleCallBack(
        path: string,
        callback: (isaccessible: boolean) => void
    ) {
        access(path, constants.R_OK | constants.W_OK, (err) => {
            if (err == null) callback(true);
            else {
                console.log(`User doesn't have the read and write.`);
                callback(false);
            }
        });
    }

    /**
     * Check if given path is accessible to the user which has started this process in a callback based asynchronous manner.
     * @param path path of the file.
     */
    public async isAccessibleAsync(path: string): Promise<boolean> {
        try {
            await accessAsync(path, constants.F_OK);
            return true;
        } catch (err) {
            console.log(err);
            console.log(`File doesn't exist.`);
            return false;
        }
    }
}
