import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsClienteComponent } from './ins-cliente.component';

describe('InsClienteComponent', () => {
  let component: InsClienteComponent;
  let fixture: ComponentFixture<InsClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
