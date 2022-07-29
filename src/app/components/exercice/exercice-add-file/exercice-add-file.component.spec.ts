import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceAddFileComponent } from './exercice-add-file.component';

describe('ExerciceAddFileComponent', () => {
  let component: ExerciceAddFileComponent;
  let fixture: ComponentFixture<ExerciceAddFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciceAddFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceAddFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
