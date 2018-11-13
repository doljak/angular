import { Component, OnInit } from '@angular/core';
import { D3GraphBarService } from './d3-graph-bar.service';

declare const d3:any;

@Component({
  selector: 'd3-graph-bar',
  templateUrl: './d3-graph-bar.component.html',
  styleUrls: ['./d3-graph-bar.component.css']
})
export class D3GraphBarComponent implements OnInit {

  public width:number = 400;
  public height:number = 300;
  public padding:number = 100;
  public barPadding:number = 5;

  constructor(private d3Service:D3GraphBarService) { }

  ngOnInit() 
  {
    const svg = 
      d3
        .select('body')
        .append('svg')
        .attr('width', this.width)
        .attr('height', this.height)
        .attr('padding', this.padding)

    // dando looping no json
    this.d3Service.getSales()
      .subscribe(sales => sales.json().forEach(
        (response:any) => 
        {

          d3
            .select('body')
            .append('p')
            .text(`${response.day}'s best seller was ${response.bestSeller}. There were ${response.sales} total sales`)

        }))
    
    // inicio formatando grafico de barras
    this.d3Service.getSales().subscribe(sales => {
      const json = sales.json()
      
      svg.selectAll('rect')
            .data(json)
            .enter()
            .append('rect')
            .attr('x', (d:any,i:number) => i * (this.width / json.length))
            .attr('y', (d:any) => this.height - d.sales)
            .attr('width', this.width / json.length - this.barPadding)
            .attr('height', (d:any) => d.sales )
            .attr('fill', (d:any)=>{

              const max = d3.max(json, (d:any)=> d.sales);
              const min = d3.min(json, (d:any)=> d.sales);

              return (d.sales === min)? '#ff3300' : 
                (d.sales === max)? '#66ff66' :
                  '#3399ff'
            })    
      })
  }
}
