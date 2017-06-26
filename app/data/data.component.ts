import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'my-data',
    templateUrl: 'app/data/data.component.html',
    styleUrls: [ 'app/data/data.component.css' ]
})
export class DataComponent {

    public dataV1 = [
        { id: 0, value: 90 },
        { id: 1, value: 60 },
        { id: 2, value: 160 },
        { id: 3, value: 120 }
    ];

    public dataV2 = [
        { id: 0, value: 90 },
        { id: 1, value: 60 },
        { id: 2, value: 40 },
        { id: 3, value: 200 }
    ];

    public data = this.dataV1;
    private svg;

    constructor() { }

    public ngOnInit() {
        this.svg = d3.select('svg');
    }

    public drawBarCharts() {
        this.svg
            .selectAll('rect')
            .data(this.data)
            .enter()
            .append('rect')
            .call(this.updateRectangle)
    }

    public addInteractions() {
        this.svg.on('click', () => {
            d3.select(d3.event.target).style('fill', 'green');
        })
    }

    public addOne() {
        this.data.push({ id: this.data.length, value: this.randomOneElement() });

        this.svg.selectAll('rect')
            .data(this.data, this.getKeyFunction)
            .enter()
            .append('rect')
            .transition()
            .duration(500)
            .call(this.updateRectangle);
    }

    public removeOne() {
        this.data.splice(2, 1);

        let selection = this.svg
            .selectAll('rect')
            .data(this.data, this.getKeyFunction);

        selection
            .exit()
            .transition()
            .duration(500)
            .attr('width', 0)
            .remove();

        selection
            .transition()
            .duration(500)
            .delay(500)
            .call(this.updateRectangle);
    }

    public changeData() {
        if (this.data === this.dataV1) {
            this.data = this.dataV2;
        } else {
            this.data = this.dataV1;
        }

        this.svg.selectAll('rect')
            .data(this.data, this.getKeyFunction)
            .attr('width', (data) => data.value)

        
    }

    public randomOneElement(): number {
        return 10 + Math.random() * 250 | 0;
    }

    public randomNewData() {
        let count = 1 + Math.random() * 10 | 0;
        this.data = [];
        for (let i = 0 ; i < count ; i++) {
            this.data.push({ id: i, value: this.randomOneElement() });
        }
    }

    private updateRectangle(selection) {
        let rowHeight = 30;
        selection
            .attr('class', 'my-rect)')
            .attr('x', 0)
            .attr('y', (data, index) => index * (10 + rowHeight))
            .attr('height', rowHeight)
            .attr('width', (data) => data.value)
    }

    private getKeyFunction(data) {
        return data.id;
    }
}
