import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActInfoComponent } from './act-info.component';

describe('ActInfoComponent', () => {
  let component: ActInfoComponent;
  let fixture: ComponentFixture<ActInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
