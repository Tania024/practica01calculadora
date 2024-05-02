import { Routes } from '@angular/router';
import { SumaComponent } from './pages/suma/suma.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { RestaComponent } from './pages/resta/resta.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { OperacionesComponent } from './components/operaciones/operaciones.component';
import { SobrenosotrosComponent } from './components/sobrenosotros/sobrenosotros.component';


export const routes: Routes = [

    {path: 'Inicio', title: 'Inicio', component: InicioComponent},
    {path: 'Operaciones', title: 'Operaciones', component: OperacionesComponent},
    {path: 'Calculadora', title: 'Calculadora', component: CalculadoraComponent},
    {path: 'Sobrenosotros ', title: 'Sobrenosotros', component: SobrenosotrosComponent},



    {path: 'suma', title: 'Operación suma', component: SumaComponent},
    {path: 'resta', title: 'Operación resta', component: RestaComponent},
    {path: 'acercade', title: 'Acerca de...', component: AcercadeComponent},
];
