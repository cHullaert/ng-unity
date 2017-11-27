import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityAppComponent } from './unity-app.component';

describe('UnityAppComponent', () => {
  let component: UnityAppComponent;
  let fixture: ComponentFixture<UnityAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnityAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
