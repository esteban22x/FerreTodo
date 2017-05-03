import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaInfoComponent } from './categoria-info.component';

describe('CategoriaInfoComponent', () => {
  let component: CategoriaInfoComponent;
  let fixture: ComponentFixture<CategoriaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
