import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratsComponent } from './congrats.component';

describe('CongratsComponent', () => {
  let component: CongratsComponent;
  let fixture: ComponentFixture<CongratsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CongratsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CongratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
