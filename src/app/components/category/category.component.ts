import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories = [];
  constructor() { }

  ngOnInit() {
    this.categories = [
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
      { id: 3, name: 'C' },
      { id: 4, name: 'D' },
      { id: 5, name: 'E' },
      { id: 6, name: 'F' },
      { id: 7, name: 'G' },
    ]
  }

}
