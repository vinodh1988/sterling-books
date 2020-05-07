import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductscrollComponent } from './productscroll.component';

describe('ProductscrollComponent', () => {
  let component: ProductscrollComponent;
  let fixture: ComponentFixture<ProductscrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductscrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
