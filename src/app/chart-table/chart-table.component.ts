import { Chart } from './../chart';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pirp-chart-table',
  templateUrl: './chart-table.component.html',
  styleUrls: ['./chart-table.component.css']
})
export class ChartTableComponent implements OnInit {
  @Input('chart') chart: Chart;
  constructor() { }

  ngOnInit() {
  }

}
