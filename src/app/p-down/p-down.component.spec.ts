import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDownComponent } from './p-down.component';

describe('PDownComponent', () => {
  let component: PDownComponent;
  let fixture: ComponentFixture<PDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
