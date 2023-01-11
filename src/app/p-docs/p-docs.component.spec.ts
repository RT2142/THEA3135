import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDOCSComponent } from './p-docs.component';

describe('PDOCSComponent', () => {
  let component: PDOCSComponent;
  let fixture: ComponentFixture<PDOCSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PDOCSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PDOCSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
