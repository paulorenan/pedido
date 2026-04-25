import { Component } from '@angular/core';
import { Pergunta1Component } from "./components/pergunta1/pergunta1.component";
import { CommonModule } from '@angular/common';
import { Pergunta2Component } from "./components/pergunta2/pergunta2.component";
import { Pergunta3Component } from "./components/pergunta3/pergunta3.component";
import { Pergunta4Component } from "./components/pergunta4/pergunta4.component";
import { Pergunta5Component } from "./components/pergunta5/pergunta5.component";
import { Pergunta6Component } from "./components/pergunta6/pergunta6.component";
import { Pergunta7Component } from "./components/pergunta7/pergunta7.component";
import { Pergunta8Component } from "./components/pergunta8/pergunta8.component";
import { AceiteComponent } from "./components/aceite/aceite.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, Pergunta1Component, Pergunta2Component, Pergunta3Component, Pergunta4Component, Pergunta5Component, Pergunta6Component, Pergunta7Component, Pergunta8Component, AceiteComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  numeroPergunta = 1;

  proximaPergunta(numero: number) {
    this.numeroPergunta = numero;
  }

}
