import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvCComponent } from './tv-c.component';

describe('TvCComponent', () => {
  let component: TvCComponent;
  let fixture: ComponentFixture<TvCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
