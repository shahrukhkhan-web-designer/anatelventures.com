import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCounsellingComponent } from './education-counselling.component';

describe('EducationCounsellingComponent', () => {
  let component: EducationCounsellingComponent;
  let fixture: ComponentFixture<EducationCounsellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationCounsellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationCounsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
