import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVComponent } from './edit-v.component';

describe('EditVComponent', () => {
  let component: EditVComponent;
  let fixture: ComponentFixture<EditVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
