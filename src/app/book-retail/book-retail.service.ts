import { Injectable } from '@angular/core';
import { IBook } from './model/book';

@Injectable()
export class BookRetailService {
  private BookRetailList : Array<IBook> = [
    {
      "id": 1,
      "name": "Harry Potter and the Philosopher's Stone",
      "summary": "The first book in the Harry Potter series, where young wizard Harry discovers his magical abilities and starts his journey at Hogwarts School of Witchcraft and Wizardry.",
      "coverImage": "https://m.media-amazon.com/images/I/81Vuk+qsXRL._AC_UF1000,1000_QL80_.jpg",
      "price": 15.99,
      "rating": 4.8,
      "author": "J.K. Rowling"
    },
    {
      "id": 2,
      "name": "Harry Potter and the Deathly Hallows",
      "summary": "The final installment in the Harry Potter series, following Harry's quest to defeat the dark wizard Lord Voldemort and save the wizarding world.",
      "coverImage": "harry_potter_deathly_hallows.jpg",
      "price": 19.99,
      "rating": 4.9,
      "author": "J.K. Rowling"
    },
    {
      "id": 6,
      "name": "1984",
      "summary": "A dystopian novel depicting a totalitarian society, where the government controls every aspect of people's lives and even their thoughts.",
      "coverImage": "1984.jpg",
      "price": 12.99,
      "rating": 4.5,
      "author": "George Orwell"
    },
    {
      "id": 7,
      "name": "Animal Farm",
      "summary": "A political allegory that satirizes the events leading up to the Russian Revolution and the early years of the Soviet Union.",
      "coverImage": "animal_farm.jpg",
      "price": 10.99,
      "rating": 4.4,
      "author": "George Orwell"
    },
    {
      "id": 11,
      "name": "Pride and Prejudice",
      "summary": "A classic novel exploring the themes of love, class, and social expectations in 19th-century England.",
      "coverImage": "pride_and_prejudice.jpg",
      "price": 17.99,
      "rating": 4.7,
      "author": "Jane Austen"
    },
    {
      "id": 12,
      "name": "Sense and Sensibility",
      "summary": "A tale of two sisters navigating societal norms and relationships in early 19th-century England.",
      "coverImage": "sense_and_sensibility.jpg",
      "price": 15.99,
      "rating": 4.6,
      "author": "Jane Austen"
    },
    {
      "id": 16,
      "name": "Norwegian Wood",
      "summary": "A nostalgic novel that explores themes of love, loss, and the impact of the past on the present.",
      "coverImage": "norwegian_wood.jpg",
      "price": 14.99,
      "rating": 4.3,
      "author": "Haruki Murakami"
    },
    {
      "id": 17,
      "name": "Kafka on the Shore",
      "summary": "A surreal and metaphysical tale intertwining the lives of two protagonists with mysterious and fantastical elements.",
      "coverImage": "kafka_on_the_shore.jpg",
      "price": 16.99,
      "rating": 4.5,
      "author": "Haruki Murakami"
    }
  ]
  
  
  constructor() { 

  }

  public getBookRetailList():Array<IBook>{
    return this.BookRetailList
  }
  public getBook(id :number) : IBook| undefined{
    return this.BookRetailList.find(item=>item.id===id)
  }
  public getBookDetailSummary(id: number): string {
    const book = this.getBook(id);
    if (!book) {
        throw new Error(`No book found with id: ${id}`);
    }

    const { name, author, summary } = book;
    const summaryString = `${name} by ${author}: ${summary}`;

    return summaryString;
}

  
}
