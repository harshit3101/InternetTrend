import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewCentreComponent } from './main-view-centre.component';

describe('MainViewCentreComponent', () => {
  let component: MainViewCentreComponent;
  let fixture: ComponentFixture<MainViewCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainViewCentreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
