import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailWikiPage } from './detail-wiki.page';

describe('DetailWikiPage', () => {
  let component: DetailWikiPage;
  let fixture: ComponentFixture<DetailWikiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailWikiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
