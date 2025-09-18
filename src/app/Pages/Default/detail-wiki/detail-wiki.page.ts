import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopvarComponent } from 'src/app/Component/topvar/topvar.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-detail-wiki',
  templateUrl: './detail-wiki.page.html',
  styleUrls: ['./detail-wiki.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, TopvarComponent]
})
export class DetailWikiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
