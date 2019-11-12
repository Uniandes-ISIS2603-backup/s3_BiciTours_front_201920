import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TourRoutingModule } from './tour-routing.module';
import { TourListComponent } from './tour-list/tour-list.component';
import { TourService } from './tour.service';
import { FormsModule } from '@angular/forms';
import {TourCreateComponent} from './tour-create/tour-create.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';
import {FotoCreateComponent} from '../foto/foto-create/foto-create.component';
import { RecomendacionComponent } from './recomendacion/recomendacion.component';
import { RecomendacionesService } from './recomendaciones.service';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TourRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [TourListComponent, TourDetailComponent,TourCreateComponent,FotoCreateComponent, RecomendacionComponent],
    providers: [TourService],
    exports:[TourListComponent,TourCreateComponent,FotoCreateComponent, RecomendacionComponent]
})
export class TourModule {}