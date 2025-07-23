import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditTaskComponent } from './addedit-task.component';

describe('AddeditTaskComponent', () => {
  let component: AddeditTaskComponent;
  let fixture: ComponentFixture<AddeditTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddeditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
