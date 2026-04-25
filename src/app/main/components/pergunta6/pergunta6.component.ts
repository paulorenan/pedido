import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pergunta6',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pergunta6.component.html',
  styleUrl: './pergunta6.component.scss'
})
export class Pergunta6Component {
  resposta = '';
  desabilitarBotao = false;
  @Output() proximaPergunta = new EventEmitter<number>();

  responder(resposta: string) {
    this.resposta = resposta;
    this.desabilitarBotao = true;
  }

  proxima() {
    this.proximaPergunta.emit(7);
  }

  voltar() {
    this.resposta = '';
    this.desabilitarBotao = false;
  }

}
