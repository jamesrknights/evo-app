import { CommonModel } from '../../common/model/common.model';

export abstract class AbstractCommonModel implements CommonModel {

    set (propertyName : string, propertyValue : string, source : any) : void {}
    
    get (propertyName : string) : any {}

    thisToString () : string { 
        throw ("not available");
    }

    changed (property : string, type : string,  changes : any) {
        this.changed(property, type,  changes);
    }

 }