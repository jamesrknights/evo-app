import { Injectable, Inject } from '@angular/core';
import { AppHelper } from '../../../util/apphelper';
import { AbstractCommonModel } from '../../../common/model/abstract.common.model';

export class Session extends AbstractCommonModel {

    private sessionId : Object;
    private username : string;
    private password : string;

    constructor () {
        super();
    }

    set (propertyName : string, propertyValue : object, source : any) : void {
        switch (propertyName) {
            case "sessionId":
                this.sessionId = propertyValue;
                break;
            default:
                console.error("Unable to set Session Model");
        }
    }

    success () : boolean {
        let result = false;
        if (this.sessionId !== "FAILED") {
            result = true;
        }
        return result;
    }

    get (propertyName : string) {
        let result = null;
        if (propertyName) {
            switch (propertyName) {
                case "sessionId":
                    result = this.sessionId;
                    break;
                default:
                    console.error("Not a property");
            }
        }
        return result;
    }

}