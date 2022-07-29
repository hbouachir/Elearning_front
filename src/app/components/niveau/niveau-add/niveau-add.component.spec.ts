import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauAddComponent } from './niveau-add.component';

describe('NiveauAddComponent', () => {
  let component: NiveauAddComponent;
  let fixture: ComponentFixture<NiveauAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiveauAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NiveauAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
