import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaitingOpponentPage } from './waiting-opponent.page';

describe('WaitingOpponentPage', () => {
  let component: WaitingOpponentPage;
  let fixture: ComponentFixture<WaitingOpponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingOpponentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaitingOpponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
