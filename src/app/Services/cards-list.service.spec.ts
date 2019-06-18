import { TestBed } from '@angular/core/testing';

import { CardsListService } from './cards-list.service';

describe('CardsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardsListService = TestBed.get(CardsListService);
    expect(service).toBeTruthy();
  });
});
