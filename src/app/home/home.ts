import { Component } from '@angular/core';
import { HomeHero } from './home-hero/home-hero';
import { HomeWork } from './home-work/home-work';
import { HomeProjects } from './home-projects/home-projects';

@Component({
  selector: 'app-home',
  imports: [HomeHero, HomeWork, HomeProjects],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home { }
