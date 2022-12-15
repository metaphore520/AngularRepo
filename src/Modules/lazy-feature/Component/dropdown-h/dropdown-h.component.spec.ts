import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownHComponent } from './dropdown-h.component';

describe('DropdownHComponent', () => {
  let component: DropdownHComponent;
  let fixture: ComponentFixture<DropdownHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
