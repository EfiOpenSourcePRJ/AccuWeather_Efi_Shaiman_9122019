import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachPanelComponent } from './seach-panel.component';

describe('SeachPanelComponent', () => {
  let component: SeachPanelComponent;
  let fixture: ComponentFixture<SeachPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeachPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeachPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
