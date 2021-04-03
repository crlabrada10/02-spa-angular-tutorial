import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from '../../services/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(private activatedRouter: ActivatedRoute, private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(param => {
      // console.log(param);
      // console.log(param.id);
      //  console.log(param['id']);
     this.heroe = this._heroesService.getHeroe(param['id']);
    });
  }
}
