import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pergunta8Component } from './pergunta8.component';

describe('Pergunta8Component', () => {
  let component: Pergunta8Component;
  let fixture: ComponentFixture<Pergunta8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pergunta8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pergunta8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
