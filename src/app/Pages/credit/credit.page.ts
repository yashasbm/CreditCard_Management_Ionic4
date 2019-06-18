import { Component, OnInit } from '@angular/core';
import { Cards, CardsListService } from 'src/app/Services/cards-list.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.page.html',
  styleUrls: ['./credit.page.scss'],
})
export class CreditPage implements OnInit {
  cards: Cards[];

  constructor(private cardService: CardsListService) { }

  ngOnInit() {
    this.cardService.getCards().subscribe(res => {
      this.cards = res;
    });
  }

  remove(item) {
    this.cardService.removeCard(item.id);
  }


}
