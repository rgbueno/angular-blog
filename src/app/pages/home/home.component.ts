import { Component, OnInit  } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { dataFake } from '../../data/dataFake';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MenuTitleComponent, MenuTitleComponent, BigCardComponent, SmallCardComponent, CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  mainArticle: any = '';
  articles: any[] = [];

  ngOnInit(): void {
    this.mainArticle = dataFake.at(0);

    this.articles = dataFake.filter(element => element.id > 1);
  }
}
