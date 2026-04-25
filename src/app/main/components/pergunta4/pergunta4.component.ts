import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pergunta4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pergunta4.component.html',
  styleUrl: './pergunta4.component.scss'
})
export class Pergunta4Component {
  resposta = '';
  desabilitarBotao = false;
  @Output() proximaPergunta = new EventEmitter<number>();

  responder(resposta: string) {
    this.resposta = resposta;
    this.desabilitarBotao = true;
  }

  proxima() {
    this.proximaPergunta.emit(5);
  }

  voltar() {
    this.resposta = '';
    this.desabilitarBotao = false;
  }

}
