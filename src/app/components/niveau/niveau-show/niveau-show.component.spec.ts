import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauShowComponent } from './niveau-show.component';

describe('NiveauShowComponent', () => {
  let component: NiveauShowComponent;
  let fixture: ComponentFixture<NiveauShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiveauShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NiveauShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
