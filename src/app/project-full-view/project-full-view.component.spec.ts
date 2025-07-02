import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFullViewComponent } from './project-full-view.component';

describe('ProjectFullViewComponent', () => {
  let component: ProjectFullViewComponent;
  let fixture: ComponentFixture<ProjectFullViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectFullViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectFullViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
