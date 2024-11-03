import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewformComponent } from './viewform.component';

describe('ViewformComponent', () => {
  let component: ViewformComponent;
  let fixture: ComponentFixture<ViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
