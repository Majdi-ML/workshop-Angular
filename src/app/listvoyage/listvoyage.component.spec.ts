import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvoyageComponent } from './listvoyage.component';

describe('ListvoyageComponent', () => {
  let component: ListvoyageComponent;
  let fixture: ComponentFixture<ListvoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListvoyageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListvoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
