import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameResultPage } from './game-result.page';

describe('GameResultPage', () => {
  let component: GameResultPage;
  let fixture: ComponentFixture<GameResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
