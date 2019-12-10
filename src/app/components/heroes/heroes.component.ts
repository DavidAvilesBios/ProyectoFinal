import { Component, OnInit } from '@angular/core';
import {HeroesService,Heroe} from '../../services/heroes.services';
import {Router} from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  Clientes = [];
  constructor(private _heroesService:HeroesService,
              private router:Router) {
                this._heroesService.listaItem().subscribe(resp => {
                  this.Clientes = resp;
                  console.log(resp);
                }, error => {
                  console.log(error);
                });

   }

  ngOnInit() {
   }
   nuevaLLamada() {
    this.router.navigate(['fulllayout/llamada']);
  }

}

