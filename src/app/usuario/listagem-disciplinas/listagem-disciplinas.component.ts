import { Component } from '@angular/core';
import {Disciplina} from '../../shared/modelo/disciplina';
import {DISCIPLINAS} from '../../shared/modelo/DISCIPLINAS';

@Component({
  selector: 'app-listagem-disciplinas',
  templateUrl: './listagem-disciplinas.component.html',
  styleUrls: ['./listagem-disciplinas.component.css']
})
export class ListagemDisciplinasComponent {

  disciplinas = DISCIPLINAS;
  excluir(disciplinaARemover: Disciplina): void {
    const indx = this.disciplinas.findIndex(disciplina =>
      disciplina.nome === disciplinaARemover.nome);

    this.disciplinas.splice(indx, 1);
  }

}
