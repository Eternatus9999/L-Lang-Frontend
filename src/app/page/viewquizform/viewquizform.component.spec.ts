import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquizformComponent } from './viewquizform.component';

describe('ViewquizformComponent', () => {
  let component: ViewquizformComponent;
  let fixture: ComponentFixture<ViewquizformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewquizformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewquizformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
