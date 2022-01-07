import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SehirComponent } from './sehir.component';

describe('SehirComponent', () => {
  let component: SehirComponent;
  let fixture: ComponentFixture<SehirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SehirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SehirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
