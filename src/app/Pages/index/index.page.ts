import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TopvarComponent } from 'src/app/Component/topvar/topvar.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, TopvarComponent]
})
export class IndexPage implements OnInit {

  constructor() { }

  ngOnInit() { }

}
