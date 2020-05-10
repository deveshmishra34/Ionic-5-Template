import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReferAndEarnPage } from './refer-and-earn.page';

describe('ReferAndEarnPage', () => {
  let component: ReferAndEarnPage;
  let fixture: ComponentFixture<ReferAndEarnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferAndEarnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReferAndEarnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
