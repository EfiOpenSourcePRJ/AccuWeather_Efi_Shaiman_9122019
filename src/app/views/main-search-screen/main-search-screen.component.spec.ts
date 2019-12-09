import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSearchScreenComponent } from './main-search-screen.component';

describe('MainSearchScreenComponent', () => {
  let component: MainSearchScreenComponent;
  let fixture: ComponentFixture<MainSearchScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSearchScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSearchScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
