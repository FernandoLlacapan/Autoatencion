import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LiquidosPage } from './liquidos.page';

describe('LiquidosPage', () => {
  let component: LiquidosPage;
  let fixture: ComponentFixture<LiquidosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
