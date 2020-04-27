import {NgModule} from '@angular/core';
import {SafePipe} from './safe/safe.pipe';
import {FormatTimePipe} from './formatTime/format-time.pipe';
import { ObjNgForPipe } from './objNgFor/obj-ng-for.pipe';
import {MomentPipe} from './moment/moment.pipe';

@NgModule({
    imports: [],
    declarations: [
        FormatTimePipe,
        SafePipe,
        ObjNgForPipe,
        MomentPipe
    ],
    exports: [
        FormatTimePipe,
        SafePipe,
        ObjNgForPipe,
        MomentPipe
    ]
})

export class PipesModule {

}
