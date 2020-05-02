import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageTwoPage } from './page-two.page';

describe('PageTwoPage', () => {
  let component: PageTwoPage;
  let fixture: ComponentFixture<PageTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
