import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { MatDialog } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";
import { FirebaseService } from "../../services/firebase.service";

@Component({
  selector: "app-llamada",
  templateUrl: "./llamada.component.html",
  styleUrls: ["./llamada.component.scss"]
})
export class llamadaComponent implements OnInit {
  exampleForm: FormGroup;
  clientes: any;
  tiposLlamadas: any;
  clientesList = [];
  id: any;
  texto = 'Generar Llamada';
  llamadasubmit = {
    cliente: "",
    tipollamada: "",
    observaciones: "",
    fecharegistro: new Date(),
    usuarioregistro: localStorage.getItem("usuario")
  };

  validation_messages = {
    cliente: [{ type: "required", message: "Name is required." }],
    tipollamada: [{ type: "required", message: "Surname is required." }],
    observaciones: [{ type: "required", message: "Age is required." }]
  };

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    public firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.createForm();
    this.firebaseService.getUsers().subscribe(resp => {
      this.clientes = resp;
      for (let cliente of this.clientes) {
        const clientejson = {
          Oid: 1,
          nombre: cliente.payload.doc.data().name
        };
        this.clientesList.push(clientejson);
      }
      console.log(this.clientesList);
    });
    this.firebaseService.getTiposLlamadas().subscribe(resp => {
      this.tiposLlamadas = resp;
    });

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.cargarDatos();
        console.log(this.id);
      }
    });
  }

  cargarDatos() {
    this.texto = 'Editar llamada';
    this.firebaseService.getllamada(this.id).subscribe((resp:any) => {
      console.log(resp);
      this.exampleForm.setValue({
        cliente: resp.payload.data().cliente,
        tipollamada: resp.payload.data().tipollamada,
        observaciones: resp.payload.data().observaciones,
      });
    });
  }
  createForm() {
    this.exampleForm = this.fb.group({
      cliente: ["", Validators.required],
      tipollamada: ["", Validators.required],
      observaciones: ["", Validators.required]
    });
  }

  resetFields() {
    this.exampleForm = this.fb.group({
      cliente: new FormControl("", Validators.required),
      tipollamada: new FormControl("", Validators.required),
      observaciones: new FormControl("", Validators.required)
    });
  }

  onSubmit(value) {
    this.llamadasubmit.cliente = value.cliente;
    this.llamadasubmit.tipollamada = value.tipollamada;
    this.llamadasubmit.observaciones = value.observaciones;
    if(!this.id){
    this.firebaseService.createllamada(this.llamadasubmit).then(res => {
      this.resetFields();
      this.router.navigate(["/fulllayout/heroes"]);
    });
  } else {
    this.firebaseService.updatellamada(this.id, this.llamadasubmit).then(res => {
      this.router.navigate(["/fulllayout/heroes"]);
    });
  }
  }
}
