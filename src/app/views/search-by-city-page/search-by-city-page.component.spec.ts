import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByCityPageComponent } from './search-by-city-page.component';

describe('SearchByCityPageComponent', () => {
  let component: SearchByCityPageComponent;
  let fixture: ComponentFixture<SearchByCityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByCityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByCityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
