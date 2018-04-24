import { Injectable, Inject } from '@angular/core';
import { CommonEventHandler } from '../../../common/handler/common.event.handler';
import { AppHelper } from '../../../util/apphelper';
import { AbstractCommonModel } from '../../../common/model/abstract.common.model';
import { Session } from '../../model/session/session.model';

@Injectable()
export class SessionEventHandler implements CommonEventHandler {

    private model : AbstractCommonModel;

    constructor (private helper : AppHelper) {
        this.model = new Session();
    }

    public change (data, txData : AbstractCommonModel) {
        console.log("change heard", data);
    }

    public set (data, txData : AbstractCommonModel) {
        console.log("change set");
    }

    public default (data, txData : AbstractCommonModel) {
        console.log("change default");
        if (!this.helper.isNull(data) && !this.helper.isNull(txData)) {
            try {
                txData.set("sessionId", data["sessionId"], this);
            } catch (e) {
                console.error("Cannot set session", e);
            }
        }
    }

    public handleEvent (eventType : string, data, txData : AbstractCommonModel) {
        switch (eventType.toLowerCase()) {
            case "change": 
                this.change(data, txData);
                break;
            case "default":
                this.default(data, txData);
                break;
            case "set":
                this.set(data, txData);
                break;
            default:
                this.default(data, txData);
        }
    }
}