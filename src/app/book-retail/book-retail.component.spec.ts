import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRetailComponent } from './book-retail.component';

describe('BookRetailComponent', () => {
  let component: BookRetailComponent;
  let fixture: ComponentFixture<BookRetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookRetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookRetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
