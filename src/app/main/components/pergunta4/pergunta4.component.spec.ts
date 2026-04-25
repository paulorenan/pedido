import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pergunta4Component } from './pergunta4.component';

describe('Pergunta4Component', () => {
  let component: Pergunta4Component;
  let fixture: ComponentFixture<Pergunta4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pergunta4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pergunta4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
