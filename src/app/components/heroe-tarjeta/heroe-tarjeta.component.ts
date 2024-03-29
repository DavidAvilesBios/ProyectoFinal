import { Component, OnInit ,Input} from '@angular/core';
import { markParentViewsForCheckProjectedViews } from '@angular/core/src/view/util';
import {Router} from '@angular/router';
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

 @Input() cliente:any={};
 @Input() index:number;

  constructor(private router:Router) { }

  ngOnInit() {
  }


  verHeroe(id){
    console.log(this.index);
    //this.router.navigate(['fulllayout/heroe',this.index])
    this.router.navigate(['fulllayout/llamada/' + id]);
  }
}
