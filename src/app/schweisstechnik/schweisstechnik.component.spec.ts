import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchweisstechnikComponent } from './schweisstechnik.component';

describe('SchweisstechnikComponent', () => {
  let component: SchweisstechnikComponent;
  let fixture: ComponentFixture<SchweisstechnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchweisstechnikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchweisstechnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
