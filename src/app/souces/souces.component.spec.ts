import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoucesComponent } from './souces.component';

describe('SoucesComponent', () => {
  let component: SoucesComponent;
  let fixture: ComponentFixture<SoucesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoucesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoucesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
