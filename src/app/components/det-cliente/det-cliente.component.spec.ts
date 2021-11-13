import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetClienteComponent } from './det-cliente.component';

describe('DetClienteComponent', () => {
  let component: DetClienteComponent;
  let fixture: ComponentFixture<DetClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
