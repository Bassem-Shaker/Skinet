import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaganation } from './models/paganation.model';
import { IProduct } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Skinet';
  products!: IProduct[];

  constructor(private httpclient: HttpClient) {

  }
  ngOnInit(): void {
    this.httpclient.get<IPaganation>("https://localhost:44303/api/products").subscribe({
      next: (v) => {
        this.products=v.data
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }
}
