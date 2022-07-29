import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceShowComponent } from './exercice-show.component';

describe('ExerciceShowComponent', () => {
  let component: ExerciceShowComponent;
  let fixture: ComponentFixture<ExerciceShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciceShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
