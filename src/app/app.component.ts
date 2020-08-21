import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sparkTest';
  boxes = [
    'box1', 'box3', 'box3', 'box4',
  ];
  pos: number;
  posAnt: number;
  showBallVisible = false;
  ngOnInit(): void {
    this.showBall();
  }
  showBall(i = 0) {
    this.posAnt = this.pos;
    this.showBallVisible = true;
    this.pos = i;
  }
}
