import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtSubmissionBoxComponent } from './thought-submission-box.component';

describe('ThoughtSubmissionBoxComponent', () => {
  let component: ThoughtSubmissionBoxComponent;
  let fixture: ComponentFixture<ThoughtSubmissionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoughtSubmissionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoughtSubmissionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
