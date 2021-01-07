import {Routes} from '@angular/router';


import { HomeComponent} from './home/home.component';
import { RestaurantesComponent} from './restaurantes/restaurantes.component'
import { DiversaoComponent} from './diversao/diversao.component'


export const ROUTES: Routes = [

    { path: '', component: HomeComponent},
    { path: 'restaurantes', component: RestaurantesComponent},
    { path: 'diversao', component: DiversaoComponent}

]