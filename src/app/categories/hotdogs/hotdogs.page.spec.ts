import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotdogsPage } from './hotdogs.page';

describe('HotdogsPage', () => {
  let component: HotdogsPage;
  let fixture: ComponentFixture<HotdogsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HotdogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
