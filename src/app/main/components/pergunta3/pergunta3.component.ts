import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pergunta3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pergunta3.component.html',
  styleUrl: './pergunta3.component.scss'
})
export class Pergunta3Component {
  resposta = '';
  desabilitarBotao = false;
  @Output() proximaPergunta = new EventEmitter<number>();

  responder(resposta: string) {
    this.resposta = resposta;
    this.desabilitarBotao = true;
  }

  proxima() {
    this.proximaPergunta.emit(4);
  }

  voltar() {
    this.resposta = '';
    this.desabilitarBotao = false;
  }

}
