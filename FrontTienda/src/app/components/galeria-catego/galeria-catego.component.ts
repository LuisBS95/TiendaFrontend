
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
  selector: 'app-galeria-catego',
  templateUrl: './galeria-catego.component.html',
  styleUrls: ['./galeria-catego.component.css'],
  providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}
  ]
})
export class GaleriaCategoComponent implements OnInit {
  @Input() titulo : String = "Nueva Categoria";
  productos :any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

  
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
