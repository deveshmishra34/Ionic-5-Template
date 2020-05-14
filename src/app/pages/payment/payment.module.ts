import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule, Routes} from '@angular/router';
import {AddMoneyPage} from './add-money/add-money.page';
import {PassbookPage} from './passbook/passbook.page';
import {PaymentSummaryPage} from './payment-summary/payment-summary.page';
import {KycPage} from './kyc/kyc.page';

const routes: Routes = [
    {
        path: 'add-money',
        component: AddMoneyPage
    },
    {
        path: 'passbook',
        component: PassbookPage
    },
    {
        path: 'kyc',
        component: KycPage
    },
    {
        path: 'passbook/:id/payment-summary',
        component: PaymentSummaryPage
    },
    {
        path: '',
        redirectTo: '/payment/passbook',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        AddMoneyPage,
        PassbookPage,
        PaymentSummaryPage,
        KycPage
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    providers: [],
    entryComponents: [],
    exports: []
})

export class PaymentModule {

}
