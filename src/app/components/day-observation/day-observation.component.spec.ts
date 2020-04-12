import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DayObservationComponent } from './day-observation.component';

describe('DayObservationComponent', () => {
  let component: DayObservationComponent;
  let fixture: ComponentFixture<DayObservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayObservationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DayObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
