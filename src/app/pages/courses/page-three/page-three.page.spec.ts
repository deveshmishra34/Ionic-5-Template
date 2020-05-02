import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageThreePage } from './page-three.page';

describe('PageThreePage', () => {
  let component: PageThreePage;
  let fixture: ComponentFixture<PageThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
