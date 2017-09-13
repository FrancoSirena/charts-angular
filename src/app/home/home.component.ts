import { RequestService } from './../services/request.service';
import { Chart } from './../chart';
import { Component, OnInit } from '@angular/core';
import { ChartTypeEnum } from './../chart-type-enum.enum';

@Component({
  selector: 'pirp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chartData: Chart;
  error: string;
  canvasLine: any = {
    height: 400,
    width: 400,
    type: ChartTypeEnum.Line
  };
  canvasBar: any = {
    height: 400,
    width: 400,
    type: ChartTypeEnum.Bar
  };
  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.getData()
      .subscribe(data => this.chartData = data,
                error => this.error = error);
  }

}
