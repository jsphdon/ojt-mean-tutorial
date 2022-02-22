import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListFormComponent } from './new-list-form.component';

describe('NewListFormComponent', () => {
  let component: NewListFormComponent;
  let fixture: ComponentFixture<NewListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewListFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
