import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PassbookPage } from './passbook.page';

describe('PassbookPage', () => {
  let component: PassbookPage;
  let fixture: ComponentFixture<PassbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassbookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PassbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
