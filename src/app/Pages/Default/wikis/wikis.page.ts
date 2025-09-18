import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TopvarComponent } from 'src/app/Component/topvar/topvar.component';

@Component({
  selector: 'app-wikis',
  templateUrl: './wikis.page.html',
  styleUrls: ['./wikis.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, FormsModule, TopvarComponent]
})
export class WikisPage implements OnInit {

  searchTerm: string = '';

  constructor() { }

  ngOnInit() { }

  filterCards() {
    const term = this.searchTerm.toLowerCase();

    // Selecciona todos los h2 de clase card-title dentro del DOM
    const cards = document.querySelectorAll('.card-title');

    cards.forEach(titleEl => {
      const col = titleEl.closest('ion-col') as HTMLElement;
      if (!col) return;
      const title = titleEl.textContent?.toLowerCase() || '';
      col.style.display = title.includes(term) ? '' : 'none';
    });
  }

}
