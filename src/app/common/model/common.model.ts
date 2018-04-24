export interface CommonModel {

    set (propertyName : string, propertyValue : object, source : any) : void;
    
    get (propertyName : string) : any;

    thisToString () : string;

    changed (property : string, type : string,  changes : any);

}