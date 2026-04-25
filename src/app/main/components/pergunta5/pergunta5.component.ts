import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pergunta5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pergunta5.component.html',
  styleUrl: './pergunta5.component.scss'
})
export class Pergunta5Component {
  resposta = '';
  desabilitarBotao = false;
  @Output() proximaPergunta = new EventEmitter<number>();

  responder(resposta: string) {
    this.resposta = resposta;
    this.desabilitarBotao = true;
  }

  proxima() {
    this.proximaPergunta.emit(6);
  }

  voltar() {
    this.resposta = '';
    this.desabilitarBotao = false;
  }

}
