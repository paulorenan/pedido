import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pergunta1Component } from './pergunta1.component';

describe('Pergunta1Component', () => {
  let component: Pergunta1Component;
  let fixture: ComponentFixture<Pergunta1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pergunta1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pergunta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
