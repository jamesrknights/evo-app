import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { CommonConfiguration } from '../configuration/common.configuration';
import { CommonModel } from '../model/common.model';
import { AppHelper } from '../../util/apphelper';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
const jsonFlickrFeed : Function = function () {}
 
@Injectable()
export abstract class AbstractCommonService implements CommonService {

    protected uri : string; 
    protected format : string;
    private httpOptions : Object;
    private response : any;
    private headers : HttpHeaders;
    private callback : string;
    private event : string;
    private txData : CommonModel;
    
    constructor (protected http : HttpClient, private jsonp : Jsonp, protected helper : AppHelper, 
        protected configuration : CommonConfiguration  ) {
        this.format = this.configuration.getFormat();
        this.uri = this.configuration.getURI();
        this.headers = this.configuration.getHttpHeaderOptions();
        this.callback = this.configuration.getCallback();
    }

    public getURI () : string {
        let result = null; 
        if (!this.helper.isEmpty(this.uri)) {
            result = this.uri;
        }
        return result;
    }

    public getData () : any {
        let result = null;
        
        if (!this.helper.isNull(this.http)) {
            switch (this.configuration.getResponseType().toLowerCase()) {
                case "jsonp":
                    this.jsonpCall();
                    break;
                case "json":
                    this.jsonCall();
                    break;
                default:
                    console.error("No response type is configured");
            }
        }
        return result;
    }

    public jsonpCall () {
        try {
            this.jsonp.request(this.getURI(), this.configuration.getHttpHeaderOptions()).map(
                (res) => res.json()
                ).subscribe(
                (data) => {this.processResponse(data)}, 
            );
        } catch (e) {
            console.error ("Unable to get response ", e);
        }
    }

    public jsonCall (type = "get") {
        if (this.configuration.getRequestType().toLowerCase()) {
            type = this.configuration.getRequestType().toLowerCase();
            switch (type) {
                case "get":
                    this.get();
                    break;
                case "post":
                    this.post();
                    break;
                default:
                    console.error("No Type of Request provided");
                    break;
            }
        }
    }

    private get () {
        try {
            this.http.get(this.getURI(), this.configuration.getHttpHeaderOptions()).map(
                (res) => res
                ).subscribe(
                (data) => {this.processResponse(data)}, 
            );
        } catch (e) {
            console.error ("Unable to get response ", e);
        }
    }

    private post () {
        try {
            this.http.post(this.getURI(), {"userName" : "cmartin", "password" : "123"}).map(
                (res) => res
                ).subscribe(
                (data) => {this.processResponse(data)}, 
            );
        } catch (e) {
            console.error ("Unable to get response ", e);
        }
    }


    public startTx (eventType, txData) {
        let result = null;
        if (!this.helper.isEmpty(eventType) && !this.helper.isEmpty(this.configuration.getEntityType())) {
            this.event = eventType;
            this.txData = txData;
            if (this.configuration.verifyEvent(eventType)) {
                this.getData();
            }
        }
        return result;
    }

    public processResponse (data) {
        let result = null;
        if (!this.helper.isNull(data)) {
            let handler = this.configuration.getEventHandler();
            if (!this.helper.isNull(handler)) {
                handler.handleEvent(this.event, data, this.txData);
            }
        }
        return result;
    }

}