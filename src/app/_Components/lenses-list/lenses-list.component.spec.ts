import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LensesListComponent } from './lenses-list.component';

describe('LensesListComponent', () => {
  let component: LensesListComponent;
  let fixture: ComponentFixture<LensesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LensesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LensesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
