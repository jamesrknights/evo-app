import { CommonConfiguration } from "../../../common/configuration/common.configuration";
import { SessionEventHandler } from '../../handler/session/session.event.handler';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AppHelper } from '../../../util/apphelper';

//change these values
const uri =  "http://localhost:8091/v1/session/start";
const format = "application/json";
const entityType = "SESSION";
const defaultEvent = new Map<String, String>();
const eventTypes = ["change", "default", "set"];
const requestType = "POST";
const responseType = "JSON";
const httpOptions = {
    headers: new HttpHeaders({ 
        "Accept": "*/*"
    })}
const callback = null;

@Injectable()
export class SessionConfiguration implements CommonConfiguration {

    constructor (private helper : AppHelper) {}

    public getURI() : string {
        return uri;
    }

    public getFormat() : string {
        return format;
    }

    public getHttpHeaderOptions() {
        return httpOptions;
    }

    public getRequestType () {
        return requestType;
    }

    public getResponseType () {
        return responseType;
    }

    public getCallback () {
        return callback;
    }
 
    public getEventTypes() : Array<string> {
        return eventTypes;
    }

    public getEntityType() : string {
        return entityType;
    }

    public getEventHandler() : SessionEventHandler {
        return new SessionEventHandler(new AppHelper());
    }

    public verifyEvent(eventType) : boolean {
        let result = false;
        let events = this.getEventTypes()
        if (!this.helper.isNull(events)) {
            events.indexOf(eventType) >= 0 ? result = true : result = false;
        }
        return result;
    }
    

}