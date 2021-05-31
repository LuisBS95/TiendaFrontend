import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog , MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<DetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      console.log(data);
    }

  ngOnInit(): void {
  }

  closeModal(){
    this.dialogRef.close('Aqui enviamos la info del modal');
  }

}
