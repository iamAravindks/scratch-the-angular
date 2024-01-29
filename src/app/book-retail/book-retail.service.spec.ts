import { TestBed } from '@angular/core/testing';

import { BookRetailService } from './book-retail.service';

describe('BookRetailService', () => {
  let service: BookRetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
