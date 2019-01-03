import { Component, OnInit } from '@angular/core';
import { D3GraphBarService } from './d3-graph-bar.service';
import 'd3-transition'
declare const d3:any;

@Component({
  selector: 'd3-graph-bar',
  templateUrl: './d3-graph-bar.component.html',
  styleUrls: ['./d3-graph-bar.component.css']
})
export class D3GraphBarComponent implements OnInit {

  public width:number = 400;
  public height:number = 300;
  public padding:number = 50;
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
        .style('padding', this.padding)
        .style('overflow', 'visible')

    // dando looping no json
    // this.d3Service.getSales()
    //   .subscribe(sales => sales.json().forEach(
    //     (response:any) => 
    //     {

    //       d3
    //         .select('body')
    //         .append('p')
    //         .text(`${response.day}'s best seller was ${response.bestSeller}. There were ${response.sales} total sales`)

    //     }))
    
    // inicio formatando grafico de barras
    this.d3Service.getSales().subscribe(sales => {

      const json = sales.json()

      let xScale = d3.scaleBand()
        .domain(json.map((d:any) => d.day))
        .range([0, this.width])
      
      let yScale = d3.scaleLinear()
        .domain([0, d3.max(json, (d:any)=> d.sales)])
        .range([0, this.height])

      const xAxis = d3.axisBottom(xScale)
      
      const yAxis = d3.axisLeft(yScale)
        .ticks(5)

      svg.append('g')
        .attr('transform', `translate(0, ${ this.height })`)  
        .call(xAxis)
      
      svg.append('g')
        .call(yAxis)  

      svg.selectAll('rect')
            .data(json)
            .enter()
            .append('rect')
            .on("click", (d:any)=> alert(`The best sales was:${ d.bestSeller }`) )
            .attr('x', (d:any,i:number) => i * (this.width / json.length))
            .attr('y', (d:any) => this.height - yScale(d.sales))
            .attr('width', this.width / json.length - this.barPadding)
            .attr('height', (d:any)=>yScale(d.sales))
            .attr('fill', '#3399ff')
              .transition()
              .duration(2000)
              // .ease(d3.easeLinear)
            .attr('fill', (d:any)=>{

              const max = d3.max(json, (d:any)=> d.sales);
              const min = d3.min(json, (d:any)=> d.sales);

              return (d.sales === min)? '#ff3300' : 
                (d.sales === max)? '#66ff66' :
                  '#3399ff'
            })
            
      svg.selectAll('text.label')
            .data(json)
            .enter()
            .append('text')
            .attr('class','label')
            .text((d:any)=> d.sales)
            .attr('text-anchor', 'middle')
            .attr('x', (d:any, i:number)=> i * (this.width / json.length) + ( this.width / json.length - this.barPadding ) / 2)
            .attr('y', (d:any)=>yScale(d.sales))
            .attr('font-family', 'sans-serif')
            .attr('font-size', '11px')
            .attr('fill', 'white')
      })
  }
}
