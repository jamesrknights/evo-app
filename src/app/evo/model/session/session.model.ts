import { Injectable, Inject } from '@angular/core';
import { AppHelper } from '../../../util/apphelper';
import { AbstractCommonModel } from '../../../common/model/abstract.common.model';

export class Session extends AbstractCommonModel {

    private status;

    constructor () {
        super();
    }

    set (propertyName : string, propertyValue : object, source : any) : void {
        switch (propertyName) {
            case "status":
                this.status = propertyValue;
                break;
            default:
                console.error("Unable to set Session Model");
        }
    }

    success () : boolean {
        let result = false;
        if (this.status === "OK") {
            result = true;
        }
        return result;
    }

}