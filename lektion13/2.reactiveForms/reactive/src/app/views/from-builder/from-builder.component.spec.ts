import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromBuilderComponent } from './from-builder.component';

describe('FromBuilderComponent', () => {
  let component: FromBuilderComponent;
  let fixture: ComponentFixture<FromBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
