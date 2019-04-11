import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodTextComponent } from './good-text.component';

describe('GoodTextComponent', () => {
  let component: GoodTextComponent;
  let fixture: ComponentFixture<GoodTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
