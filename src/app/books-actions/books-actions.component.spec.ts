import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksActionsComponent } from './books-actions.component';

describe('BooksActionsComponent', () => {
  let component: BooksActionsComponent;
  let fixture: ComponentFixture<BooksActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
