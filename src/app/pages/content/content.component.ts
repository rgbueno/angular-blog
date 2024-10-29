import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover: string = 'https://i0.wp.com/www.astropt.org/blog/wp-content/uploads/2017/10/680d3defa78b4262_ysuf_thm_16.9_1920x1080.jpg';
  contentTitle: string = 'Minha Noticia';
  contentDescription: string = 'Olá mundo';
}
