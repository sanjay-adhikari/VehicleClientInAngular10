import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IVehicle } from './vehicle';
import { VehicleService } from './vehicle.service';

@Component({
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {
  pageTitle = 'Vehicle Detail';
  errorMessage = '';
  vehicle: IVehicle | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getVehicle(id);
    }
  }
  getVehicle(id: number) {
    this.vehicleService.getVehicle(id).subscribe({
      next: vehicle => this.vehicle = vehicle,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/vehicles']);
  }

}
