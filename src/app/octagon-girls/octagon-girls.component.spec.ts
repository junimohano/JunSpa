import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctagonGirlsComponent } from './octagon-girls.component';

describe('OctagonGirlsComponent', () => {
  let component: OctagonGirlsComponent;
  let fixture: ComponentFixture<OctagonGirlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctagonGirlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctagonGirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
