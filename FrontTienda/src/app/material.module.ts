import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatTooltipModule,
    MatIconModule
  ],
  exports : [
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatTooltipModule,
    MatIconModule
  ]
})
export class MaterialModule { }
