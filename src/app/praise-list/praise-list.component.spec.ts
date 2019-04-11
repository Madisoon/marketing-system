import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraiseListComponent } from './praise-list.component';

describe('PraiseListComponent', () => {
  let component: PraiseListComponent;
  let fixture: ComponentFixture<PraiseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraiseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraiseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
