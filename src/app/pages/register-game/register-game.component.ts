import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-game',
  templateUrl: './register-game.component.html',
  styleUrls: ['./register-game.component.scss', '../login/login.component.scss']
})
export class RegisterGameComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private gameService: GameService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: [null, Validators.required],
      overview: [null, Validators.required],
      posterPath: [null],
    });
  }

  submit() {
    if (this.form.valid) {
      this.loading = true;
      this.gameService.create(this.form.value).subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'Jogo cadastrado com sucesso',
        }).then(() => this.router.navigate(['home']));
        this.loading = false;
      }, (err) => {
        this.loading = false;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ocorreu um erro',
        });
      });
    }
  }

}
