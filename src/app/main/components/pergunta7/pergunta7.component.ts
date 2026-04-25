import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pergunta7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pergunta7.component.html',
  styleUrl: './pergunta7.component.scss'
})
export class Pergunta7Component {
  resposta = '';
  desabilitarBotao = false;
  @Output() proximaPergunta = new EventEmitter<number>();

  responder(resposta: string) {
    this.resposta = resposta;
    this.desabilitarBotao = true;
  }

  proxima() {
    this.proximaPergunta.emit(8);
  }

  voltar() {
    this.resposta = '';
    this.desabilitarBotao = false;
  }

}
