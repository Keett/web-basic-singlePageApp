import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sehir } from '../models/Sehir';

@Component({
  selector: 'app-sehir',
  templateUrl: './sehir.component.html',
  styleUrls: ['./sehir.component.css']
})
export class SehirComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  sehirler:Sehir[] = [];

  ngOnInit(): void {
    this.getValues().subscribe(data => {
      this.sehirler = data;
    })
  }
  getValues() {
    return this.httpClient.get<Sehir[]>("https://localhost:7157/api/TodoItems");
    //https://localhost:7157;http://localhost:5157
  }

}
