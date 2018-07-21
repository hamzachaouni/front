import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TajribaComponent } from './tajriba.component';

describe('TajribaComponent', () => {
  let component: TajribaComponent;
  let fixture: ComponentFixture<TajribaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TajribaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TajribaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
