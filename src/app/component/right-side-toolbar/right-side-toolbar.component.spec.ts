import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideToolbarComponent } from './right-side-toolbar.component';

describe('RightSideToolbarComponent', () => {
  let component: RightSideToolbarComponent;
  let fixture: ComponentFixture<RightSideToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSideToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
