import { Component,Input } from '@angular/core';
import { Collegue } from '../models';


@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue.components.html',
})
export class CollegueComponent {

  @Input() user: Collegue = {
    pseudo: "Tony Stark",
    score: 100,
    photoUrl: "https://img.joomcdn.net/dace9a3da47d7d748e13af43f96344a4449c7688_original.jpeg"
  };


}
