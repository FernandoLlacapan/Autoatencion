import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SandwichPage } from './sandwich.page';

describe('SandwichPage', () => {
  let component: SandwichPage;
  let fixture: ComponentFixture<SandwichPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SandwichPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
