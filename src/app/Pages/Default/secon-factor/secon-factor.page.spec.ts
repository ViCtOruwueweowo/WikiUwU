import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeconFactorPage } from './secon-factor.page';

describe('SeconFactorPage', () => {
  let component: SeconFactorPage;
  let fixture: ComponentFixture<SeconFactorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeconFactorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
