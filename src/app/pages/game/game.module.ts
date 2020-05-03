import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {SelectBattlePage} from './select-battle/select-battle.page';
import {WaitingOpponentPage} from './waiting-opponent/waiting-opponent.page';
import {GameResultPage} from './game-result/game-result.page';
import {RouterModule, Routes} from '@angular/router';
import {PipesModule} from '../../pipes/pipes.module';

const routes: Routes = [
    {
        path: 'select-battle',
        component: SelectBattlePage
    },
    {
        path: 'waiting-opponent',
        component: WaitingOpponentPage
    },
    {
        path: 'game-result',
        component: GameResultPage
    },
    {
        path: '',
        redirectTo: '/game/select-battle',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        SelectBattlePage,
        WaitingOpponentPage,
        GameResultPage
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild(routes),
        PipesModule
    ],
    providers: [],
    entryComponents: [],
    exports: []
})

export class GameModule {

}
