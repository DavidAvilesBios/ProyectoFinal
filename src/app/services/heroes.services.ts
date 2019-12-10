import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export interface Item { name: string; }
export interface Client { name: string; }
@Injectable()
export class HeroesService{

    constructor(private db: AngularFirestore){
    }

  listaItem(){
    return this.db.collection('llamadas').snapshotChanges();
  }



}



export interface Heroe{
    nombre:string;
    bio:string;
    img:string;
    aparicion:string;
    casa:string;
    idx?:number;
  }
  