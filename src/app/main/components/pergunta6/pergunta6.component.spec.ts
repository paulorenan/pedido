import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pergunta6Component } from './pergunta6.component';

describe('Pergunta6Component', () => {
  let component: Pergunta6Component;
  let fixture: ComponentFixture<Pergunta6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pergunta6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pergunta6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
