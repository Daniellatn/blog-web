import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photoPrincipal: string = "";
  titlePrincipal: string = "";
  descriptionPrincipal: string = "";
  private id: string | null = "0";
  photoSmall: string = "";
  titleSmall: string = "";
  list = dataFake;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
    this.setValuesToComponentPrincipal()
    this.setValuesToComponentSmall()
  }

  setValuesToComponentPrincipal() {
    const result = dataFake.filter(article => article.id == "1")[0];
    this.titlePrincipal = result.title;
    this.descriptionPrincipal = result.description;
    this.photoPrincipal = result.photo;
  }

  setValuesToComponentSmall() {
    dataFake.map(item => {
      if(item.id > "1") {
        this.photoSmall = item.photo
        this.titleSmall = item.title
      }
    })
  }

}
