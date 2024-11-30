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

  it('should have a title "Sandwiches"', () => {
    const compiled = fixture.nativeElement;
    const title = compiled.querySelector('ion-title').textContent;
    expect(title).toContain('Sandwiches');
  });
});
