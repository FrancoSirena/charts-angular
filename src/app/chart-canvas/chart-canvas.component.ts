import { Chart } from './../chart';
import { Component, OnInit, Input } from '@angular/core';
import { ChartTypeEnum } from './../chart-type-enum.enum';

@Component({
  selector: 'pirp-chart-canvas',
  templateUrl: './chart-canvas.component.html',
  styleUrls: ['./chart-canvas.component.css']
})
export class ChartCanvasComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('canvas-style') canvas: CanvasInput;
  @Input('chart') chart: Chart;

  defaultProps: any = {
    options: {
      responsive: true
    },
    colors : [
      {
        backgroundColor: 'rgba(21,18,229,0.6)',
        borderColor: 'rgba(21,18,229,1)',
        pointBackgroundColor: 'rgba(21,18,229,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(21,18,229,0.8)'
      },
      {
        backgroundColor: 'rgba(24,71,114,0.6)',
        borderColor: 'rgba(24,71,114,1)',
        pointBackgroundColor: 'rgba(24,71,114,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(24,71,114,1)'
      },
      {
        backgroundColor: 'rgba(3,180,48,0.6)',
        borderColor: 'rgba(3,180,48,1)',
        pointBackgroundColor: 'rgba(3,180,48,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(3,180,48,0.8)'
      }
    ],
    legend:  true
  };

  constructor() { }

  ngOnInit() {

  }

}

export interface CanvasInput {
  height: number;
  width: number;
  type: ChartTypeEnum;
}
