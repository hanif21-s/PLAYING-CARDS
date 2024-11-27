import { Component } from '@angular/core';
import {MatDialogActions, MatDialogTitle, MatDialogClose, MatDialogContent} from '@angular/material/dialog'
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-delete-monster-confirmation-dialog',
  standalone: true,
  imports: [MatDialogActions, MatDialogTitle, MatDialogClose, MatDialogContent, MatButtonModule],
  templateUrl: './delete-monster-confirmation-dialog.component.html',
  styleUrl: './delete-monster-confirmation-dialog.component.css'
})
export class DeleteMonsterConfirmationDialogComponent {

}
