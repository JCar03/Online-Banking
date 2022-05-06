import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToSomeoneElseComponent } from './to-someone-else.component';

describe('ToSomeoneElseComponent', () => {
  let component: ToSomeoneElseComponent;
  let fixture: ComponentFixture<ToSomeoneElseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToSomeoneElseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToSomeoneElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
