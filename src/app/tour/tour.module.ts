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
<<<<<<< Updated upstream
import { RecomendacionComponent } from './recomendacion/recomendacion.component';

=======
import { EventoComponent } from './tour-evento/evento/evento.component';
import { TourEventoComponent } from './tour-evento/tour-evento.component';
import { TourAddEventoComponent } from './tour-add-evento/tour-add-evento.component';
>>>>>>> Stashed changes


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TourRoutingModule,
        ReactiveFormsModule
    ],
<<<<<<< Updated upstream
    declarations: [TourListComponent, TourDetailComponent,TourCreateComponent,FotoCreateComponent, RecomendacionComponent],
=======
    declarations: [TourListComponent, TourDetailComponent,TourCreateComponent,FotoCreateComponent, EventoComponent, TourEventoComponent, TourAddEventoComponent],
>>>>>>> Stashed changes
    providers: [TourService],
    exports:[TourListComponent,TourCreateComponent,FotoCreateComponent]
})
export class TourModule {}