import { Cards, CardsListService } from './../../services/cards-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-add-cards',
  templateUrl: './add-cards.page.html',
  styleUrls: ['./add-cards.page.scss'],
})
export class AddCardsPage implements OnInit {

  cards: Cards = {
    cardType: '',
    cardBank: '',
    cardNumber: 1234123412341234,
    cardExpMonth: 4,
    cardExpYear: 2022,
    cardName: '',
    createdAt: new Date().getTime(),
    cardNickName: ''
  };

  cardId = null;

  constructor(private route: ActivatedRoute, private nav: NavController, private cardService: CardsListService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.cardId = this.route.snapshot.params['id'];
    if (this.cardId) {
      this.loadCard();
    }
  }

  async loadCard() {
    const loading = await this.loadingController.create({
      message: 'Loading Card..'
    });
    await loading.present();

    this.cardService.getCard(this.cardId).subscribe(res => {
      loading.dismiss();
      this.cards = res;
    });
  }

  async saveCard() {

    const loading = await this.loadingController.create({
      message: 'Saving Card..'
    });
    await loading.present();

    if (this.cardId) {
      this.cardService.updateCard(this.cards, this.cardId).then(() => {
        loading.dismiss();
        //this.nav.back('/home');
      });
    } else {
      this.cardService.addCard(this.cards).then(() => {
        loading.dismiss();
        //this.nav.goBack('home');
      });
    }
  }


}
