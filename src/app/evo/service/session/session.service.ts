import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Jsonp} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AbstractCommonService } from '../../../common/service/abstract.common.service';
import { AppHelper } from '../../../util/apphelper';
import { SessionConfiguration } from '../../configuration/session/session.configuration';

@Injectable()
export class SessionService extends AbstractCommonService {

    private entityType : string;

    constructor (@Inject(HttpClient) http : HttpClient, @Inject(Jsonp) jsonp : Jsonp,
                    @Inject(AppHelper) helper : AppHelper, @Inject(SessionConfiguration) config : SessionConfiguration) {
        super(http, jsonp, helper, config);
    }

    public getData (params) {
        return super.getData(params);
    }

    public start (eventType, txData, params) {
        return super.start(eventType, txData, params);
    }

    public processResponse (data) {
        return super.processResponse(data);
    }

    public createtxData () {

    }
}