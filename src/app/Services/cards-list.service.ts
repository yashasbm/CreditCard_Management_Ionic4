import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Cards {
  id?: string;
  cardType: string;
  cardBank: String;
  cardNumber: number;
  cardExpMonth: number;
  cardExpYear: number;
  cardName: string;
  createdAt: number;
  cardNickName: string;
}

@Injectable({
  providedIn: 'root'
})
export class CardsListService {
  private cardsCollection: AngularFirestoreCollection<Cards>;

  private cards: Observable<Cards[]>;

  constructor(public db: AngularFirestore) {
    this.cardsCollection = this.db.collection<Cards>('cards');

    this.cards = this.cardsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getCreditCArds(){

  }

  getDebitCards(){

  }

  getCards() {
  this.cardsCollection = this.db.collection<Cards>('cards');

  this.cards = this.cardsCollection.snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })
  );
    
    return this.cards;
  }

  getCard(id) {
    return this.cardsCollection.doc<Cards>(id).valueChanges();
  }

  updateCard(cards: Cards, id: string) {
    return this.cardsCollection.doc(id).update(cards);
  }

  addCard(cards: Cards) {
    return this.cardsCollection.add(cards);
  }

  removeCard(id) {
    return this.cardsCollection.doc(id).delete();
  }
}
