import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
<<<<<<< HEAD
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
=======
import {MatIconModule} from '@angular/material/icon';
>>>>>>> 1bee44af5265b6587afc37c8f648a07d526d3af8


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
<<<<<<< HEAD
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
=======
    MatIconModule
>>>>>>> 1bee44af5265b6587afc37c8f648a07d526d3af8
  ],
  exports : [
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatTooltipModule,
<<<<<<< HEAD
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
=======
    MatIconModule
>>>>>>> 1bee44af5265b6587afc37c8f648a07d526d3af8
  ]
})
export class MaterialModule { }
