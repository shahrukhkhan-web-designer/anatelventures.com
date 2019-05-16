import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItServicesComponent } from './it-services.component';

describe('ItServicesComponent', () => {
  let component: ItServicesComponent;
  let fixture: ComponentFixture<ItServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
