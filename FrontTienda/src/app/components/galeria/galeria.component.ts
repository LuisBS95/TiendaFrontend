import { Component, Input, OnInit } from '@angular/core';
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/material/tooltip';
import {MatDialog , MatDialogRef} from '@angular/material/dialog';
import { DetalleComponent } from '../detalle/detalle.component';
/** Custom options the configure the tooltip's default show/hide delays. */
export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 1000,
  touchendHideDelay: 1000,
};

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
  providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}
  ]
})
export class GaleriaComponent implements OnInit {

  @Input() titulo : String = "Nueva Categoria";
  productos :any = [1,2,3,4,5,6];

  
  constructor(public dialog : MatDialog) {

   }

  ngOnInit(): void {
  }

  openDetalle(){
    const dialogRef = this.dialog.open(DetalleComponent, {
      width: '700px',
      height: '500px',
      data: { titulo: 'Detalle Producto'}
    });
  }

}
