import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select'



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
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  exports : [
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
