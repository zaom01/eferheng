import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LesKurdesComponent } from './les-kurdes.component';

describe('LesKurdesComponent', () => {
  let component: LesKurdesComponent;
  let fixture: ComponentFixture<LesKurdesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesKurdesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesKurdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
