import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasasDulcesPage } from './masas-dulces.page';

describe('MasasDulcesPage', () => {
  let component: MasasDulcesPage;
  let fixture: ComponentFixture<MasasDulcesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MasasDulcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
