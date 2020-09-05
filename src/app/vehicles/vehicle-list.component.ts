import { Component, OnInit } from '@angular/core';
import { IVehicle } from './vehicle';
import { VehicleService } from './vehicle.service';

@Component({
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  pageTitle = 'Vehicle List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = true;
  errorMessage = '';

  _listFilter = '';

  vehicles: IVehicle[] = [];
  filteredVehicles: IVehicle[] = [];
  
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredVehicles = this.listFilter ? this.performFilter(this.listFilter) : this.vehicles;
  }
  

  constructor(private vehicleService : VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe({
      next: vehicles => {
        this.vehicles = vehicles;
        this.filteredVehicles = this.vehicles;
        console.log('filteredvehicles\n'+JSON.stringify(this.filteredVehicles));
      },
      error: err => this.errorMessage = err
    });
  }
  
  onRatingClicked(message: string): void {
    this.pageTitle = 'Vehicle List: ' + message;
  }

  performFilter(filterBy: string): IVehicle[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.vehicles.filter((vehicle: IVehicle) =>
      vehicle.vehicleMake.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
