import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasasSaladasPage } from './masas-saladas.page';

describe('MasasSaladasPage', () => {
  let component: MasasSaladasPage;
  let fixture: ComponentFixture<MasasSaladasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MasasSaladasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
