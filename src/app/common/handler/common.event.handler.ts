import { CommonModel } from '../../common/model/common.model';

export interface CommonEventHandler {

    change (txData : CommonModel, data : any);

    set (txData : CommonModel, data : any);

    default (txData : CommonModel, data : any);

    handleEvent (eventType : string, data : any, txData : CommonModel) : void;

}