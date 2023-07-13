import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { NgxMaskDirective } from 'ngx-mask/lib/ngx-mask.directive';

declare var Swal: any;

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private _validatorsService: ValidatorsService,
              private router: Router){}



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  onSave() : void {

    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }

    this.Login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value);



    this.loginForm.reset({email:'', password:0});
  }

  isValidField(field: string){
    return this._validatorsService.isValidField(this.loginForm, field);
  }

  getFieldError(field: string): string | null {
    if (!this.loginForm.controls[field]) return null;

    const errors = this.loginForm.controls[field].errors || {};

    for(const key of Object.keys(errors)){
      switch(key){
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres`;

        case 'email':
          return `Correo Electronico Invalido`;
      }
    }
    return null;
  }


  Login (email: string, password: string): void {
    if(email === 'admin@admin.com' && password === 'admin12345'){
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión Exitoso',
        text: 'Bienvenido David Solano'
      }).then(() => {
        localStorage.setItem("user", "David");
        this.router.navigate(['/customer-site/main']);
      });
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email o contraseña incorrecto!'
      })
    }
  }
}
