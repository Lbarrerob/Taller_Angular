import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SerieRoutingModule } from './Serie-routing.module';
import { SerieListComponent } from './Serie-list/Serie-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports:[
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        SerieRoutingModule,
    ],
    declarations:[SerieListComponent],
    exports:[SerieListComponent]
})

export class SerieModule{}
