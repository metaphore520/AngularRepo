import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCComponent } from './dropdown-c.component';

describe('DropdownCComponent', () => {
  let component: DropdownCComponent;
  let fixture: ComponentFixture<DropdownCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
