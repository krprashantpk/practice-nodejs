import { FileAccess } from "./FileAccess";

const path: string = "./content/directory/fileaccess/1.txt";

var hasAccess = new FileAccess()
    .isAccessibleSync(path)
console.log(hasAccess);

