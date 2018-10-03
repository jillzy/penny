import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedThoughtBoxComponent } from './featured-thought-box.component';

describe('FeaturedThoughtBoxComponent', () => {
  let component: FeaturedThoughtBoxComponent;
  let fixture: ComponentFixture<FeaturedThoughtBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedThoughtBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedThoughtBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
