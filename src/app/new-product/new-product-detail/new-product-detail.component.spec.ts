import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductDetailComponent } from './new-product-detail.component';

describe('NewProductDetailComponent', () => {
  let component: NewProductDetailComponent;
  let fixture: ComponentFixture<NewProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
