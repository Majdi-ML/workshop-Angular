import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePComponent } from './update-p.component';

describe('UpdatePComponent', () => {
  let component: UpdatePComponent;
  let fixture: ComponentFixture<UpdatePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
