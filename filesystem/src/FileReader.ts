import * as fs from "fs";
import { Assert } from "./Assert";

export class FileReader {
  /**
   * Read the file and return the string content asynchonously.
   * @param path Path of the file.
   **/
  ReadSync(path: string): string {
    Assert.ThrowIfNullAgrumentException(path);
    if (!fs.existsSync(path)) throw Error(`File doesn't exist.`);
    return fs.readFileSync(path, { encoding: "utf-8" });
  }

  /**
   * Read the file and return the string content asynchonously.
   * @param path Path of the file.
   **/
  ReadAsync(path: string): Promise<string> {
    Assert.ThrowIfNullAgrumentException(path);
    return new Promise((resolve, rejected) => {
      try {
        fs.readFile(path, { encoding: "utf-8" }, (error, data) => {
          if (error) rejected(error);
          resolve(data);
        });
      } catch (error) {
        console.log(error);
        rejected(error);
      }
    });
  }
}
