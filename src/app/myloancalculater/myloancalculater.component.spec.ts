import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyloancalculaterComponent } from './myloancalculater.component';

describe('MyloancalculaterComponent', () => {
  let component: MyloancalculaterComponent;
  let fixture: ComponentFixture<MyloancalculaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyloancalculaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyloancalculaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
