import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private validadores: RegisterService) { 
    
    this.crearFormulario();
     // Posteo de información
     this.forma.reset();
  }

  ngOnInit(): void {

  }

  get nombreNoValido(){
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched
  }

  get apellidoNoValido(){
    return this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched
  }
  get correoNoValido(){
    return this.forma.get('correo')?.invalid && this.forma.get('correo')?.touched
  }

  get pass1NoValido() {
    return this.forma.get('pass1')?.invalid && this.forma.get('pass1')?.touched;
  }

  get pass2NoValido() {
    const pass1 = this.forma.get('pass1')?.value;
    const pass2 = this.forma.get('pass2')?.value;

    return ( pass1 === pass2 ) ? false : true;
  }

  get fechaNoValido() {
    return this.forma.get('fecha')?.invalid && this.forma.get('fecha')?.touched
  }
  
  get estadoNoValido() {
    return this.forma.get('direccion.estado')?.invalid && this.forma.get('direccion.estado')?.touched
  }
  get calleNoValido() {
    return this.forma.get('direccion.calle')?.invalid && this.forma.get('direccion.calle')?.touched
  }

  get cpNoValido() {
    return this.forma.get('direccion.cp')?.invalid && this.forma.get('direccion.cp')?.touched
  }



  crearFormulario(){
    this.forma = this.fb.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      correo: ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      pass1   : ['', [Validators.required, Validators.minLength(6) ]],
      pass2   : ['', Validators.required ],
      fecha   : ['', Validators.required],
      direccion: this.fb.group({
        estado: ['', Validators.required ],
        calle  : ['', Validators.required ],
        cp  : ['', Validators.required ],
      })
    },
    {
      validators: this.validadores.passwordsIguales('pass1','pass2')
    });

  }

  //SELECTOR 
  selectedItem: string = '';

  estados: any[] = [
    { name: 'CDMX' },
    { name: 'ESTADO DE MÉXICO' },
    { name: 'PUEBLA' },
    { name: 'MORELOS' },
    { name: 'NUEVO LEÓN' },
    { name: 'QUINTANA ROO' },
    { name: 'GUERRERO' },
  ];

  guardar(){

    console.log(this.forma);

    if ( this.forma.invalid ) {

      return Object.values( this.forma.controls ).forEach( control => {
        
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
        
        
      });
     
    }

    
    
  }

 
}
