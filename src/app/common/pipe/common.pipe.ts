import { CommonModel } from '../model/common.model';
import { Pipe, PipeTransform } from '@angular/core';

export interface CommonPipe <CommonModel> extends PipeTransform {

    transform (items: CommonModel[], searchText: string, propertyName : string);

    filter ();

}