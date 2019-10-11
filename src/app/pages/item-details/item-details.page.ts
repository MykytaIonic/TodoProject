import { Component, OnInit } from '@angular/core';
import { InsidePage } from '../inside/inside.page';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {

  public items = [];

  constructor(public activatedRoute : ActivatedRoute, private route: Router) {
    this.activatedRoute.queryParams.subscribe((res)=>{
      if(Object.keys(res).length != 0) {
          this.items.push(res);
          console.log(this.items);
        }
    });
  }

  ngOnInit() {
  }

  toPreviousPage() {
    this.route.navigate(['/inside']);
  }

}
