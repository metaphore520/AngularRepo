import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownFComponent } from './dropdown-f.component';

describe('DropdownFComponent', () => {
  let component: DropdownFComponent;
  let fixture: ComponentFixture<DropdownFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
