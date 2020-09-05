import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { VehicleListComponent } from './vehicle-list.component';
import { VehicleDetailComponent } from './vehicle-detail.component';
import { VehicleDetailGuard } from './vehicle-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';


@NgModule({
  declarations: [
    VehicleListComponent, 
    VehicleDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild([
      { path: 'vehicles', component: VehicleListComponent },
      {
        path: 'vehicles/:id',
        canActivate: [VehicleDetailGuard],
        component: VehicleDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class VehicleModule { }
