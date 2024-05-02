

import { ServiceFactory, ISomeService } from "./observable/SomeService";

let service: ISomeService = ServiceFactory("Unicast");
var subscription = service.execute();
const observer = {
    id: "observer1", // just for identifying the observer.
    next: (data: string | number) => console.log(`Observer: 1 | Have recived some data from the producer. Data is ${data}`),
    error: (error: Error) => console.log(`Observer: 1 | Some Exception has occured. Recived exception is  ${error}`),
    complete: () => console.log(`Observer: 1 | Producer has completed the data push.`)
}
const observer2 = {
    id: "observer2", // just for identifying the observer.
    next: (data: string | number) => console.log(`Observer: 2 | Have recived some data from the producer. Data is ${data}`),
    error: (error: Error) => console.log(`Observer: 2 | Some Exception has occured. Recived exception is  ${error}`),
    complete: () => console.log(`Observer: 2 | Producer has completed the data push.`)
}

subscription.subscribe(observer);
subscription.subscribe(observer2);
