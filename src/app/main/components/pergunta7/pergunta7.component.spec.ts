import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pergunta7Component } from './pergunta7.component';

describe('Pergunta7Component', () => {
  let component: Pergunta7Component;
  let fixture: ComponentFixture<Pergunta7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pergunta7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pergunta7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
