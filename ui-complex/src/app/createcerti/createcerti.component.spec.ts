import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecertiComponent } from './createcerti.component';

describe('CreatecertiComponent', () => {
  let component: CreatecertiComponent;
  let fixture: ComponentFixture<CreatecertiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecertiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecertiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
