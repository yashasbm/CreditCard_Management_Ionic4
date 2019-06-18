import { Component, OnInit } from '@angular/core';
import { Cards, CardsListService } from 'src/app/Services/cards-list.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {
  cards: Cards[];

  constructor(private cardService: CardsListService) { }

  ngOnInit() {
    this.cardService.getCards().subscribe(res => {
      this.cards = res;
      console.log("card data: "+this.cards);
    });
  }

  remove(item) {
    this.cardService.removeCard(item.id);
  }
}
