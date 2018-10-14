import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; 

import { MatButtonModule,
          MatIconModule,
          MatCardModule,
          MatFormFieldModule,
          MatInputModule,
          MatListModule,
          MatDatepickerModule,
          MatNativeDateModule,
          MatSelectModule,
          MatOptionModule,
          MatCheckboxModule,
          MatTooltipModule,
          MatDialogModule,
          MatToolbarModule,
          MatRadioModule } from "@angular/material";

@NgModule({
  imports: [
      MatButtonModule,
      MatIconModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatListModule,
      MatDatepickerModule,
      MatNativeDateModule, 
      MatSelectModule,
      MatOptionModule,
      MatCheckboxModule,
      MatRadioModule ,
      MatTooltipModule,
      MatDialogModule,
      MatToolbarModule
  ],
  exports: [
      MatButtonModule,
      MatIconModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatListModule,
      MatDatepickerModule,
      MatNativeDateModule, 
      MatSelectModule,
      MatOptionModule,
      MatCheckboxModule,
      MatRadioModule,
      MatTooltipModule,
      MatDialogModule,
      MatToolbarModule
     ]
  })
    
export class MaterialModule {}