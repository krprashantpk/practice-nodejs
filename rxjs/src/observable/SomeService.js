"use strict";
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
 * `Observable` from the rxjs library solve this problem and returns zero or multiple values to it consumers.
 *
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SomeService = void 0;
const rxjs_1 = require("rxjs");
class SomeService {
    /**
     * act as some api that continously returns data after some intervals
     */
    execute() {
        return new rxjs_1.Observable((subscriber) => {
            subscriber.next(10);
            setTimeout(() => { }, 1000); // wait for 1 sec.
            subscriber.next(11);
            setTimeout(() => { }, 1000); // wait for 1 sec.
            subscriber.next(12);
            setTimeout(() => { }, 1000); // wait for 1 sec.
            subscriber.next(12);
            subscriber.complete();
        });
    }
}
exports.SomeService = SomeService;
