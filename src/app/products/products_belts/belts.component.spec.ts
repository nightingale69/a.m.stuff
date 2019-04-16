import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeltsComponent } from './belts.component';

describe('BeltsComponent', () => {
  let component: BeltsComponent;
  let fixture: ComponentFixture<BeltsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeltsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
