import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  lang = new FormControl('english')
}
