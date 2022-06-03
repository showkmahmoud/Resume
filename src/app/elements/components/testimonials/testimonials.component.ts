import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/data/user';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.less'],
})
export class TestimonialsComponent implements OnInit {
  user: any = user;
  constructor() {}

  ngOnInit(): void {}
}
