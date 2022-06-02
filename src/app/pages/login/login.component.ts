import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  submit() {
    if (this.form.valid) {
      this.loading = true;
      this.loginService.login(this.form.value).subscribe(() => {
        this.router.navigate(['home']);
        this.loading = false;
      }, (err) => {
        this.loading = false;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuário ou senha incorreto!',
        });
      });
    }
  }

}
