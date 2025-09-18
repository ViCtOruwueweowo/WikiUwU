import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-topvar',
  templateUrl: './topvar.component.html',
  styleUrls: ['assets/topvar.component.scss'],
    standalone: true,
  imports: [CommonModule,  IonicModule,RouterModule] // <-- solo módulos

})
export class TopvarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
