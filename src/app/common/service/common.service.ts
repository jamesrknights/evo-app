import { CommonModel } from '../model/common.model';

export interface CommonService {

    getURI () : string;
    
    getData () : any;

    processResponse (data : any) : any;

    startTx (eventType : string, txData : CommonModel) : any;

}