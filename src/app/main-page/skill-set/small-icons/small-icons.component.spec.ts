import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallIconsComponent } from './small-icons.component';

describe('SmallIconsComponent', () => {
  let component: SmallIconsComponent;
  let fixture: ComponentFixture<SmallIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
