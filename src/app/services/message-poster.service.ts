import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MessagePoster {
    constructor() {
    }

    private behaviorSubject = new BehaviorSubject<any>(false);
    currentMessage = this.behaviorSubject.asObservable();

    postMessage(data: any) {
        this.behaviorSubject.next(data);
    }
}
