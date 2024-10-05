import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromocionesFritasPage } from './promociones-fritas.page';

describe('PromocionesFritasPage', () => {
  let component: PromocionesFritasPage;
  let fixture: ComponentFixture<PromocionesFritasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionesFritasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
