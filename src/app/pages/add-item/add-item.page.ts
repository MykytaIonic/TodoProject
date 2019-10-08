import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

    title: string;
    description: string;
    todo = {};

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  toPreviousPage() {
    this.route.navigate(['/inside'],{queryParams: this.todo});
  }

}
