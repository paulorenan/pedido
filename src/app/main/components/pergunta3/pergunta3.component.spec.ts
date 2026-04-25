import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pergunta3Component } from './pergunta3.component';

describe('Pergunta3Component', () => {
  let component: Pergunta3Component;
  let fixture: ComponentFixture<Pergunta3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pergunta3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pergunta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
