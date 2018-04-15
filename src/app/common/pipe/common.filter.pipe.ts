import { CommonModel } from '../model/common.model';
import { Pipe, PipeTransform } from '@angular/core';
import { CommonPipe } from './common.pipe';
import { AppHelper } from '../../util/apphelper';

@Pipe({
    name: 'filter'
})

export class CommonFilterPipe implements CommonPipe <CommonModel> {

    constructor (private helper : AppHelper) {}

    public transform(items: CommonModel[], searchText: string, el : string): any[] {
        let result = new Array<CommonModel>();
        let propertyName = "title";
        if (this.helper.isEmpty(searchText)) {
            result = items
        } else {
            searchText = searchText.toLowerCase();
            items.filter( it => {
                if (it.get(propertyName).toLowerCase().includes(searchText)) {
                    result.push(it);
                }
            });
        }
        return result;
    }

    public filter () {}

}