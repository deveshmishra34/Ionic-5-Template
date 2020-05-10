import {NgModule} from '@angular/core';
import {SafePipe} from './safe/safe.pipe';
import {FormatTimePipe} from './formatTime/format-time.pipe';
import { ObjNgForPipe } from './objNgFor/obj-ng-for.pipe';

@NgModule({
    imports: [],
    declarations: [
        FormatTimePipe,
        SafePipe,
        ObjNgForPipe
    ],
    exports: [
        FormatTimePipe,
        SafePipe,
        ObjNgForPipe
    ]
})

export class PipesModule {

}
