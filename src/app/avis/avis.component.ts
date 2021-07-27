import { Component, Input, OnInit } from '@angular/core';
import { Avis } from '../models';


@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {



  public avisUtilisateur:Avis = Avis.AIMER || Avis.DETESTER ;

  like(){
    console.log(this.avisUtilisateur);

    this.avisUtilisateur = Avis.AIMER;
  }

  unLike(){
    console.log(this.avisUtilisateur);

    this.avisUtilisateur = Avis.DETESTER
  }


  ngOnInit(): void {

  }

}
