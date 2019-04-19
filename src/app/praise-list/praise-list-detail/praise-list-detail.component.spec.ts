import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraiseListDetailComponent } from './praise-list-detail.component';

describe('PraiseListDetailComponent', () => {
  let component: PraiseListDetailComponent;
  let fixture: ComponentFixture<PraiseListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraiseListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraiseListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
