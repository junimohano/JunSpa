import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctagonGirlDetailComponent } from './octagon-girl-detail.component';

describe('OctagonGirlDetailComponent', () => {
  let component: OctagonGirlDetailComponent;
  let fixture: ComponentFixture<OctagonGirlDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctagonGirlDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctagonGirlDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
