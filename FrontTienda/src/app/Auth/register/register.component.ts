import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioDTOModel } from '../../dtos/usuarioDTO.model';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private validadores: RegisterService, private usuario: UsuarioService) { 
    
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
    return this.forma.get('email')?.invalid && this.forma.get('email')?.touched
  }

  get pass1NoValido() {
    return this.forma.get('password')?.invalid && this.forma.get('password')?.touched;
  }

  get pass2NoValido() {
    const pass1 = this.forma.get('password')?.value;
    const pass2 = this.forma.get('pass2')?.value;

    return ( pass1 === pass2 ) ? false : true;
  }

  get fechaNoValido() {
    return this.forma.get('fechaNacimiento')?.invalid && this.forma.get('fechaNacimiento')?.touched
  }
 


  crearFormulario(){
    this.forma = this.fb.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      email: ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password   : ['', [Validators.required, Validators.minLength(6) ]],
      pass2   : ['', Validators.required ],
      fechaNacimiento   : ['', Validators.required],
      
    },
    {
      validators: this.validadores.passwordsIguales('password','pass2')
    });

  }



  // GUARDAR
   newUsuario : UsuarioDTOModel = new UsuarioDTOModel();
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

    this.usuario.crearUsuario(this.forma.value).subscribe(city => console.log(city));
    
  }

  //GUARDAR USUARIO PRUEBA
  saveUsuario(){
    
    var newUsuario = new UsuarioDTOModel();
    newUsuario.idUsuario = 1200000;
    this.usuario.crearUsuario(newUsuario).subscribe(city => console.log(city));
    
  }

 
}
