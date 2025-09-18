import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular'; // ✅ Importa todo IonicModule
import { RouterLink,  RouterModule } from '@angular/router';

import { TopvarComponent } from 'src/app/Component/topvar/topvar.component';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, TopvarComponent]
})
export class FavoritesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
