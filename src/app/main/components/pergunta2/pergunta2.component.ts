import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pergunta2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pergunta2.component.html',
  styleUrl: './pergunta2.component.scss'
})
export class Pergunta2Component {
  resposta = '';
  @Output() proximaPergunta = new EventEmitter<number>();
  desabilitarBotao = false;

  responder(resposta: string) {
    this.resposta = resposta;
    this.desabilitarBotao = true;
  }

  proxima() {
    this.proximaPergunta.emit(3);
  }

  voltar() {
    this.resposta = '';
    this.desabilitarBotao = false;
  }

}
