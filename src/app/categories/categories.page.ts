import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage {
  categories = [
    { id: 1, name: 'Bebidas', image: 'bebidas.jpg' },
    { id: 2, name: 'Postres', image: 'postres.jpg' },
  ];

  constructor() {}
}