import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { HttpClient } from '@angular/common/http';
declare var Swal: any;

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private _validatorsService: ValidatorsService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['',Validators.required],
    lastName: ['',Validators.required],
    phoneNumber:['',Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
    readPrivacy:['',[Validators.required]]
  }, {
    validators:[
      this._validatorsService.isFieldOneEqualFieldTwo('password', 'password2'),
    ],
  });

  onSave(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.Register(
      this.registerForm.get('email')?.value,
      this.registerForm.get('password')?.value
    );

    this.registerForm.reset({ email: '', password: 0 });
  }

  isValidField(field: string) {
    return this._validatorsService.isValidField(this.registerForm, field);
  }

  getFieldError(field: string): string | null {
    if (!this.registerForm.controls[field]) return null;

    const errors = this.registerForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
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

  

  Register(email: string, password: string): void {
    this.http
      .post<any>('http://localhost:3000/', this.registerForm.value)
      .subscribe(
        (res) => {
          alert('SIGNIN SUCCESFUL');
          this.registerForm.reset();
          this.router.navigate(['/login']);
        },
        (err) => {
          alert('Something went wrong');
        }
      );
  }
}
