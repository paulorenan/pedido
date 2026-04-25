import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pergunta5Component } from './pergunta5.component';

describe('Pergunta5Component', () => {
  let component: Pergunta5Component;
  let fixture: ComponentFixture<Pergunta5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pergunta5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pergunta5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
