import { LineChartComponent } from './line-chart/line-chart.component';
import { DataComponent } from './data/data.component';
import { HeatMapComponent } from './heat-map/heat-map.component';
import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectionComponent } from './selection/selection.component';

const appRoutes: Routes = [
    { path: 'selection', component: SelectionComponent },
    { path: 'data', component: DataComponent },
    { path: 'line-chart', component: LineChartComponent },
    { path: 'heat-map', component: HeatMapComponent },
    { path: '',
        redirectTo: '/selection',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }