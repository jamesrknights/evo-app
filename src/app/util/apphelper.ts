import { Injectable } from '@angular/core';

@Injectable()
export class AppHelper {

    public isNull (el : any) : Boolean {
        var result = false;
        if (el === null || typeof el === "undefined") {
            result = true;
        }
        return result; 
    }

    public isEmpty (str : string) : Boolean {
        var result = false;
        if (str === null || typeof str === "undefined" || !str || str === "") {
            result = true;
        }
        return result; 
    }

    public formatDate (str : string ) : string {
        let result = "";
        if (!this.isEmpty(str)) {
            let date = new Date(str);
            result = date.toLocaleDateString("en-GB", { year: 'numeric', month: 'long', day: '2-digit' }) + 
                " at " + date.getHours() + ":" + date.getMinutes();
        }
        return result;
    }
}