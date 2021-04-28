import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit {
  personagens = []
  // title 

  constructor() {     
    let personagem = {
      nome: "Sansa",
      familia: "Stark",
      temporada: 1,
      pais: ["Ned Stark", "Catelyn Stark"],
      imagem: "https://upload.wikimedia.org/wikipedia/pt/7/74/SophieTurnerasSansaStark.jpg"
    }

    let personagem2 = {
      nome: "Aria",
      familia: "Stark",
      temporada: 1,
      pais: ["Ned Stark", "Catelyn Stark"],
      imagem: "https://rollingstone.uol.com.br/media/_versions/arya_stark_reprod_hbo_widelg.jpg"
    }

    let personagem3 = {
      nome: "Petyr",
      familia: "Baelish",
      temporada: 5,
      pais: ["--", "--"],
      imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d5/Aidan_Gillen_playing_Petyr_Baelish.jpg/220px-Aidan_Gillen_playing_Petyr_Baelish.jpg"
    }

    // this.title = "Novo título";
    this.personagens.push(personagem);
    this.personagens.push(personagem2);
    this.personagens.push(personagem3);
  }

  ngOnInit(): void {
  }

  saibaMais() : void {
    alert("Você clicou no saiba mais!");
  }

  notificar() : void  {
    // implementar no futuro     
  }

}
