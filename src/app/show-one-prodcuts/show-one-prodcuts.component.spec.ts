import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneProdcutsComponent } from './show-one-prodcuts.component';

describe('ShowOneProdcutsComponent', () => {
  let component: ShowOneProdcutsComponent;
  let fixture: ComponentFixture<ShowOneProdcutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOneProdcutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowOneProdcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
