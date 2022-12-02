import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-help-image',
  standalone: true,
    imports: [CommonModule, RouterLink],
  templateUrl: './help-image.component.html',
  styleUrls: ['./help-image.component.scss']
})
export class HelpImageComponent {

}
