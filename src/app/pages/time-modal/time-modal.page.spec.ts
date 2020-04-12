import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimeModalPage } from './time-modal.page';

describe('TimeModalPage', () => {
  let component: TimeModalPage;
  let fixture: ComponentFixture<TimeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
