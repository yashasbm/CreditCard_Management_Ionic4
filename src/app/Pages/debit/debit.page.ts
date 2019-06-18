import { Component, OnInit } from '@angular/core';
import { Cards, CardsListService } from 'src/app/Services/cards-list.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.page.html',
  styleUrls: ['./debit.page.scss'],
})
export class DebitPage implements OnInit {
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
