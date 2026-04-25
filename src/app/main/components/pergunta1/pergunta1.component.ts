import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pergunta1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pergunta1.component.html',
  styleUrl: './pergunta1.component.scss'
})
export class Pergunta1Component {
  @Output() proximaPergunta = new EventEmitter<number>();
  resposta = '';
  desabilitarBotao = false;

  responder(resposta: string) {
    this.resposta = resposta;
    this.desabilitarBotao = true;
  }

  proxima() {
    this.proximaPergunta.emit(2);
  }

  voltar() {
    this.resposta = '';
    this.desabilitarBotao = false;
  }

}
