import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwistsComponent } from './twists.component';

describe('TwistsComponent', () => {
  let component: TwistsComponent;
  let fixture: ComponentFixture<TwistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
