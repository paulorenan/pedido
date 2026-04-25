import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pergunta2Component } from './pergunta2.component';

describe('Pergunta2Component', () => {
  let component: Pergunta2Component;
  let fixture: ComponentFixture<Pergunta2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pergunta2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pergunta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
