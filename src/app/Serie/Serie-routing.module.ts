import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SerieListComponent } from './Serie-list/Serie-list.component';

const routes: Routes=[
    {
        path:'list',
        component: SerieListComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SerieRoutingModule{}