import { Component, OnInit, Input } from '@angular/core';
// import MarketPrice from 'src/app/models/marketPrice';
import Charts from '../../models/charts'
import { Data } from '@angular/router';

@Component({
  selector: 'Chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }

  @Input()
  chartData: Charts | Data = null

  title: String
  type: String
  data: Array<any>
  columnNames: Array<any>
  name: string
  options: Object
  width: Number
  height: Number

  setChartData() {
    let chartData = this.chartData.values.map(value => {
      const date = new Date(value.x * 1000)
      const formatDate = `${date.getDate()}/${date.getMonth() + 1}`
      const price = Math.round(value.y)
      return [formatDate, price]
    })

    this.title = this.chartData.name;
    this.type = 'LineChart'
    this.data = chartData;
    this.columnNames = ['', this.chartData.name];
    this.width = 600
    this.height = 400
    this.options = {
      vAxis: {
        title: this.chartData.unit
      }
    }
  }

  ngOnInit() {
    this.setChartData()
    console.log('this.setChartData()', this.chartData);
  }

}
