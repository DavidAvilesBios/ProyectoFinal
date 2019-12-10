import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  usuario:UsuarioModel;
  recordarme = false;

  constructor(private auth:AuthService,
              private router:Router) { }

  ngOnInit() { 
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm){
    if(form.invalid){return;}

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text:'Espere por favor...'
    });

    Swal.showLoading();

    this.auth.nuevoUsuario(this.usuario).subscribe(resp =>  {
      Swal.close();
      if(this.recordarme){
        localStorage.setItem('email',this.usuario.email);
      }
      this.router.navigateByUrl('/home');
    },(error)=>{
      Swal.fire({
        allowOutsideClick: false,
        type: 'error',
        title: 'Error al guardar el Usuario',
        text:'Ya se encuentra registrado'
      });
    });
    
  }


}
