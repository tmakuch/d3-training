import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'my-selection',
    templateUrl: 'app/selection/selection.component.html',
    styleUrls: [ 'app/selection/selection.component.css' ]
})
export class SelectionComponent implements OnInit {
    private svg;

    constructor() { }

    public ngOnInit() {
        this.svg = d3.select('svg');
    }

    public changeFill() {
        this.svg.selectAll('rect').attr('height', (data, index) => {
            return 60 + index * 60;
        }).style('fill', 'red');
    }

    public addCircles() {
        let circles = this.svg.append('g')
            .attr('class', 'circles')
            .attr('transform', 'translate(200, 200)')
            .on('mouseenter', () => alert('children of g catched mouseenter event'));

        circles.append('circle')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', 30);
        circles.append('circle')
            .attr('cx', 100)
            .attr('cy', 0)
            .attr('r', 50)
            .style('fill', 'green')
            .style('color', 'red')
            .text('2');
    }

    public removeRectangles() {
        this.svg.selectAll('rect').remove();
    }

    public removeAll() {
        this.svg.selectAll('*').remove();
    }
}
