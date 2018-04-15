import { Injectable } from '@angular/core';
import { CommonEventHandler } from '../../../common/handler/common.event.handler';
import { AppHelper } from '../../../util/apphelper';

@Injectable()
export class SessionEventHandler implements CommonEventHandler {

    constructor (private helper : AppHelper) {}

    public change (data) {
        console.log("change heard", data);
    }

    public set (data) {
        console.log("change set");
    }

    public default (data) {
        let result = null;
        console.log("change default");
        if (!this.helper.isNull(data)) {
            try {
                result = data["sessionId"];
            } catch (e) {
                console.error("Cannot set session", e);
            }
        }
        return result;
    }

    public handleEvent (eventType : string, data) {
        switch (eventType.toLowerCase()) {
            case "change": 
                this.change(data);
                break;
            case "default":
                this.default(data);
                break;
            case "set":
                this.set(data);
                break;
            default:
                this.default(data);
        }
    }
}