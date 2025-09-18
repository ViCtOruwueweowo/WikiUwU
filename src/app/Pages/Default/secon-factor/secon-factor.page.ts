import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';

import { IonicModule } from '@ionic/angular'; // ✅ Importa todo IonicModule
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-secon-factor',
  templateUrl: './secon-factor.page.html',
  styleUrls: ['./secon-factor.page.scss'],
  standalone: true,
  imports: [RouterLink,IonicModule, CommonModule, FormsModule] 
})
export class SeconFactorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
