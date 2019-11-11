import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TourService } from '../tour.service';
import { TourDetail } from '../tour-detail';
import {Blog} from '../../blog/blog';
import {Foto} from '../../foto/foto';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.css']
})
export class TourDetailComponent implements OnInit {

  /**
  * The component's constructor
  * @param tourService The tour's service
  * @param route The route element which helps to obtain the tour's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private tourService: TourService,
    private route: ActivatedRoute
  ) { }

  /**
  * The tour whose details we want to show
  */
  tourDetail: TourDetail;

  blogs : Blog[];

  fotos: Foto[];


  /**
  * The tour's id retrieved from the address
  */
  @Input() id: number;

  loader: any;
  /**
  * The method which retrieves the books of an tour
  */
  getTourDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tourService.getTourDetail(id)
    .subscribe(tourDetail => this.tourDetail = tourDetail);
  }

  getBlogs(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tourService.getTourDetail(id)
    .subscribe(tourDetail => this.blogs = tourDetail.blogs);
  }

  getFotos(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tourService.getTourDetail(id)
    .subscribe(tourDetail => this.fotos = tourDetail.fotos);
  }


  onLoad(params) {

    this.id = parseInt(params['id']);
    console.log(" en detail " + this.id);
    this.tourDetail = new TourDetail();
    this.getTourDetail();
    this.getBlogs();
    this.getFotos();

  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
    this.blogs = this.tourDetail.blogs;

  }

  ngOnDestroy() {
    this.loader.unsubscribe();

  }

}
