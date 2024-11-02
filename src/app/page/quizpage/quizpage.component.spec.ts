import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizpageComponent } from './quizpage.component';

describe('QuizpageComponent', () => {
  let component: QuizpageComponent;
  let fixture: ComponentFixture<QuizpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
