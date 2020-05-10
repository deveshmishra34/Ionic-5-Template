import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectBattlePage } from './select-battle.page';

describe('SelectBattlePage', () => {
  let component: SelectBattlePage;
  let fixture: ComponentFixture<SelectBattlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBattlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectBattlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
