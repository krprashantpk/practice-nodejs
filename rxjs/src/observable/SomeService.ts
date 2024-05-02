/**
 *
 * There are two mechanism that describes how data producer and consumer interact with each other.
 * First is, PULL Mechanism.
 * Second is, Push Mechanism.
 *
 * In PULL Mechanism, consumer pull the data from the producer and producer only respond and
 * return data when it is requested. In other words, producer act as a passive participent while
 * consumer act as active participant. Every function is an example of the pull mechanism.
 *
 * In PUSH Mechanism, producer determines when it needs to data the data and consumer only react to
 * to the data it recieved. Consumer will not be aware when it will recieve the data. `Promises` are the
 * most common type of the PUSH mechanism. A Promise (producer) delivers the resolved value to the the registered
 * callbacks (consumer).
 *
 * One of the drawback of the `Promises` is that it may or may not return only a single value. What if we need
 * a mechanism to return multiple value as they are available to return.
 *
 * `Observable` from the rxjs library solve this problem and returns zero or multiple values to it consumers. An `Observable` can returns
 * three types of values.
 *      - "next"      : Next value to be returned to the consumer.
 *      - "error"     : Some exception that occured during the data push.
 *      - "compelete" : notification indicating that producer has finished sending the data.
 *
 * Data consumer is also know as`Observer`. They are an object with three callback funtions, namely next, error, and complete. These three
 * callback functions react to their respective notifications from the producer.
 *
 * When an observable is done consuming the data, it is good practice to ubsubcribe to the producer.
 *
 *
 */

import { Observable } from "rxjs";

export abstract class ISomeService {
    abstract execute(): Observable<string>;
}

export function ServiceFactory(
    serviceType: "Unicast" | "Error" | "Basic"
): ISomeService {
    switch (serviceType) {
        case "Unicast":
            return new UniCastService();
        case "Error":
            return new ErrorService();
        case "Basic":
            return new BasicService();
        default:
            throw Error("Unsupported Service type");
    }
}

export class UniCastService implements ISomeService {
    /**
     * By loggin the subscriber object we can see that whenever you a new consumer is attached to the producer(observable)
     * it execute all over again represting that observable are unitcasted.
     * @returns some string value.
     */
    execute(): Observable<string> {
        return new Observable((subscriber) => {
            console.log(subscriber);
            subscriber.next("10");
        });
    }
}

class ErrorService implements ISomeService {
    /**
     *
     * Represents an operation that returns multiple values in synchronous manner and when error occured returns the error object
     * @returns some string values.
     *
     */
    public execute(): Observable<string> {
        return new Observable((subscriber) => {
            try {
                subscriber.next("Some Value");
                subscriber.next("Some Value 2");
                throw Error("Some error has occured."); // indicate that some exception has occured between pushing of the data.
                subscriber.next("Some Value 3");
                subscriber.complete();
            } catch (error) {
                subscriber.error(error);
            }
        });
    }
}
class BasicService implements ISomeService {
    /**
     * act as some api that continously returns data after some intervals.
     * @returns some numeric values.
     */
    public execute(): Observable<string> {
        return new Observable((subscriber) => {
            subscriber.next("10");
            setTimeout(() => { }, 1000); // wait for 1 sec. Indicate that data is being returned in asynchronous manner.
            subscriber.next("11");
            setTimeout(() => { }, 1000); // wait for 1 sec.
            subscriber.next("12");
            setTimeout(() => { }, 1000); // wait for 1 sec.
            subscriber.next("13");
            subscriber.complete();
        });
    }
}
