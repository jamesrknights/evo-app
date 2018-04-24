import { CommonModel } from '../model/common.model';

export interface CommonService {

    getURI () : string;
    
    getData (params : Object) : any;

    processResponse (data : any) : any;

    start (eventType : string, txData : CommonModel) : any;

}