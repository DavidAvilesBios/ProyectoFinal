import { Component, OnInit } from "@angular/core";
import { HeroesService } from "src/app/services/heroes.services";
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public doughnutChartLabels:string[] = ['Informativa', 'Cobranza'];
  public doughnutChartData:number[] = [1,2];
  public doughnutChartType:string = 'doughnut';
  constructor(private firebaseService: HeroesService,private router:Router) {}

  ngOnInit() {

    this.firebaseService.listaItem().subscribe(resp => {
      let llamadaInformativa = [];
      let llamadaCobranza = [];
      for(let llamada of resp){
        llamadaInformativa.push(llamada.payload.doc.data());
      }
      this.doughnutChartData[0] = (Number(llamadaInformativa.filter((e) => e.tipollamada === 'Informativa').length));
      this.doughnutChartData[1] = (Number(llamadaInformativa.filter((e) => e.tipollamada === 'Cobranza').length));
    }, error => {
      console.log(error);
    });
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  nuevaLLamada() {
    this.router.navigate(['fulllayout/llamada']);
  }
}
