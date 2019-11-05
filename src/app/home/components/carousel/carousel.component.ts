import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carouselEvents = [
    {
      image: 'https://ep01.epimg.net/elpais/imagenes/2019/07/27/album/1564234041_134928_1564234537_noticia_normal.jpg',
      firstCaption: 'First slide label',
      secondCaption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      image: 'https://as.com/ciclismo/imagenes/2018/07/07/tour_francia/1530951460_825375_1530968065_noticia_normal.jpg',
      firstCaption: 'First slide label',
      secondCaption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      image: 'http://img2.rtve.es/v/3671400?w=1600&preview=1469382657610.jpg',
      firstCaption: 'First slide label',
      secondCaption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      image: 'https://static.iris.net.co/semana/upload/images/2017/7/4/531224_1.jpg',
      firstCaption: 'First slide label',
      secondCaption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
