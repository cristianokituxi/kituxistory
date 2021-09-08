import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DawnloadComponent } from './dawnload.component';

describe('DawnloadComponent', () => {
  let component: DawnloadComponent;
  let fixture: ComponentFixture<DawnloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DawnloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DawnloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
