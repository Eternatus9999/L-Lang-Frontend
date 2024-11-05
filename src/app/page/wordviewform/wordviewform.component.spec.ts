import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordviewformComponent } from './wordviewform.component';

describe('WordviewformComponent', () => {
  let component: WordviewformComponent;
  let fixture: ComponentFixture<WordviewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordviewformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordviewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
