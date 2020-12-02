import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadMainComponent } from './head-main.component';

describe('HeadMainComponent', () => {
  let component: HeadMainComponent;
  let fixture: ComponentFixture<HeadMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
