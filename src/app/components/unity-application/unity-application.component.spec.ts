import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityApplicationComponent } from './unity-application.component';

describe('UnityApplicationComponent', () => {
  let component: UnityApplicationComponent;
  let fixture: ComponentFixture<UnityApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnityApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
