import { FileReader } from "./FileReader";

const reader: FileReader = new FileReader();
reader.ReadAsync('./content/file1.txt').then((content) => console.log(content));
