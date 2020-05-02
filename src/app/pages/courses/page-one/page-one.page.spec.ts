import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageOnePage } from './page-one.page';

describe('PageOnePage', () => {
  let component: PageOnePage;
  let fixture: ComponentFixture<PageOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
