import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatTooltipModule
  ],
  exports : [
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }
