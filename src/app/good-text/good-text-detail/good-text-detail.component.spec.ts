import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodTextDetailComponent } from './good-text-detail.component';

describe('GoodTextDetailComponent', () => {
  let component: GoodTextDetailComponent;
  let fixture: ComponentFixture<GoodTextDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodTextDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodTextDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
