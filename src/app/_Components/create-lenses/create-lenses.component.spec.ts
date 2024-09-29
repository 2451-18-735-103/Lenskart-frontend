import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLensesComponent } from './create-lenses.component';

describe('CreateLensesComponent', () => {
  let component: CreateLensesComponent;
  let fixture: ComponentFixture<CreateLensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
