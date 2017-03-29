import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctagonGirlComponent } from './octagon-girl.component';

describe('OctagonGirlComponent', () => {
  let component: OctagonGirlComponent;
  let fixture: ComponentFixture<OctagonGirlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctagonGirlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctagonGirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
