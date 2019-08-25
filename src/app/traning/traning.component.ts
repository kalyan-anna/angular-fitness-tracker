import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingService } from './training.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-traning',
  templateUrl: './traning.component.html',
  styleUrls: ['./traning.component.scss']
})
export class TraningComponent implements OnInit, OnDestroy {
  ongoingTraining = false;
  private alive = true;

  constructor(private trainingService: TrainingService) {}

  ngOnInit() {
    this.trainingService.exerciseChanged
      .pipe(takeWhile(() => this.alive))
      .subscribe(exercise => {
        this.ongoingTraining = !!exercise;
      });
  }

  ngOnDestroy() {
    this.alive = true;
  }
}
