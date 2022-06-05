import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Evaluation, EvaluationService } from '../../services/evaluation.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-component',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  title: string = "";
  cover: string = "https://i.imgur.com/2VcvwBZ.png";
  yourRating: string = "";
  description: string = "";
  gbgRating: number;
  profilePicture: string = "https://i.imgur.com/ZsJTb3r.png";

  gameId: string;
  evaluation: string;
  grade: number;

  evaluations: Evaluation[] = [];

  form: FormGroup;

  constructor(
    private route: ActivatedRoute, 
    private service: GameService,
    private evaluationService: EvaluationService,
    private fb: FormBuilder,
  ) {
    // get the :id from the route
    this.route.params.subscribe(params => {
      this.gameId = params.id;
    });
  }

  ngOnInit(): void {
    this.evaluationService.get(this.gameId).subscribe(data => {
      console.log('evaluation', data);
      this.evaluations = data.results;
    });
    

    this.form = this.fb.group({
      grade: [null],
      description: [null]
    });

    this.getGame();
  }

  getGame() {
    this.service.getOneGame(this.gameId).subscribe(data => {
      this.title = data.title;
      this.gbgRating = data.voteCount;
      this.cover = data.posterPath || this.cover;
      this.description = data.overview;
    });
  }

  post() {
    this.evaluationService.updateOrCreate(this.gameId, this.form.get('description').value, this.form.get('grade').value).pipe(
      tap(() => this.getGame()),
    ).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Avaliação registrada com sucesso',
      })
    });
  }

}
