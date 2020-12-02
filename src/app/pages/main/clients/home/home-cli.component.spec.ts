import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCliComponent } from './home-cli.component';

describe('HomeCliComponent', () => {
  let component: HomeCliComponent;
  let fixture: ComponentFixture<HomeCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
