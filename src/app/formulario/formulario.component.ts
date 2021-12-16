import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from '../../app/services/global.service'
import { NgForm } from '@angular/forms';
import {
  FormGroup,
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  public Departamentos = [

    { id: 1, departamento: 'Valle del Cauca' },
    { id: 2, departamento: 'Antioquia' },
    { id: 3, departamento: 'Bogota D.C.' },

  ]


  public Ciudades = [

    { ciudad: 'Cali', departamento: 'Valle del Cauca' },
    { ciudad: 'Yumbo', departamento: 'Valle del Cauca' },
    { ciudad: 'Palmira', departamento: 'Valle del Cauca' },

    { ciudad: 'Medellín', departamento: 'Antioquia' },

    { ciudad: 'Bogotá', departamento: 'Bogota D.C.' }

  ]

  public listCiudades: any = [];



  public formularioGroup!: FormGroup;


  constructor(private global: GlobalService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formularioGroup = this._formBuilder.group({

      NombreCompleto: ["", Validators.required],
      Modelo: ["", Validators.required],
      Correo: ["", Validators.required],
      Telefono: ["", Validators.required],
      Ciudad: ["", Validators.required]
    })
  }

  buscarCiudad(event: any) {
    this.listCiudades = [];
    let string = event.target.value;
    for (let index = 0; index < this.Ciudades.length; index++) {
      const element = this.Ciudades[index];
      if (element.departamento == string) {
        this.listCiudades.push(element);
      }

    }


  }

  submit() {
    console.log(this.formularioGroup.value);
    let data = {
      NombreCompleto:this.formularioGroup.value.NombreCompleto,
      Modelo:this.formularioGroup.value.Modelo,
      Correo:this.formularioGroup.value.Correo,
      Telefono:this.formularioGroup.value.Telefono,
      Ciudad:this.formularioGroup.value.Ciudad,
    }

    this.global.addData('formulario', data).subscribe(

      res => {
        Swal.fire(
          'Correcto',
          'Se envio correctamente los datos',
          'success'
        )
      },
      err => {
        Swal.fire(
          'Error',
          'Error en el envio de los datos',
          'error'
        )
      }
    );
  }



}
