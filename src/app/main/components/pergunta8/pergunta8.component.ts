import { Component, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-pergunta8',
  standalone: true,
  imports: [],
  templateUrl: './pergunta8.component.html',
  styleUrl: './pergunta8.component.scss'
})
export class Pergunta8Component {
  @Output() proximaPergunta = new EventEmitter<number>();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  moverBotao() {
    // Obtém a largura e altura da janela
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    // Gera posições aleatórias para o botão dentro dos limites da janela
    const novaPosicaoX = Math.random() * (larguraJanela - 100); // 100 é a largura do botão, ajuste conforme necessário
    const novaPosicaoY = Math.random() * (alturaJanela - 50);   // 50 é a altura do botão, ajuste conforme necessário

    // Seleciona o botão
    const botao = this.el.nativeElement.querySelector('#btnMovel');

    // Atualiza a posição do botão usando estilos inline
    this.renderer.setStyle(botao, 'position', 'absolute');
    this.renderer.setStyle(botao, 'left', `${novaPosicaoX}px`);
    this.renderer.setStyle(botao, 'top', `${novaPosicaoY}px`);
  }

  sim() {
    this.proximaPergunta.emit(9);
  }

}
