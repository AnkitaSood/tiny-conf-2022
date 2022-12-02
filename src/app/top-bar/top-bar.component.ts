import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  templateUrl: './top-bar.component.html',
  imports: [
    RouterLink
  ],
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {


}
