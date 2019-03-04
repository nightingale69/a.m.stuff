import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiletBagsComponent } from './toilet-bags.component';

describe('ToiletBagsComponent', () => {
  let component: ToiletBagsComponent;
  let fixture: ComponentFixture<ToiletBagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToiletBagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToiletBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
