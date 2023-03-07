import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViechlesComponent } from './viechles.component';

describe('ViechlesComponent', () => {
  let component: ViechlesComponent;
  let fixture: ComponentFixture<ViechlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViechlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViechlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
