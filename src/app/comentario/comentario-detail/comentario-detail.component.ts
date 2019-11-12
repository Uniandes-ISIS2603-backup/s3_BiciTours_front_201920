import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentarioService } from '../comentario.service';
import { Comentario } from '../comentario';
import { ComentarioDetail } from '../comentario-detail';

@Component({
  selector: 'app-comentario-detail',
  templateUrl: './comentario-detail.component.html',
  styleUrls: ['./comentario-detail.component.css']
})
export class ComentarioDetailComponent implements OnInit {

  /**
  * The component's constructor
  * @param comentarioService The comentario's service
  * @param route The route element which helps to obtain the editorial's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private comentarioService: ComentarioService,
    private route: ActivatedRoute
  ) { }

  /**
  * The comentario whose details we want to show ggg
  */
  @Input() comentarioDetail: ComentarioDetail;

  /**
  * The comentario's id retrieved from the address
  */
  comentario_id: number;

  respuestas : Comentario[];

  /**
  * The method which retrieves the replies of a comentario
  */
  getComentarioDetail(): void {
    this.comentarioService.getComentarioDetail(this.comentario_id)
      .subscribe(comentarioDetail => {
        this.comentarioDetail = comentarioDetail
      });
  }

  /**
  * The method which initializes the component
  * We need to initialize the comentario so it is never considered as undefined
  */
  ngOnInit() {
    this.comentario_id = +this.route.snapshot.paramMap.get('id');
    if (this.comentario_id) {
      this.comentarioDetail = new ComentarioDetail();
      this.getComentarioDetail();
      this.respuestas = this.comentarioDetail.respuestas;
    }

  }
}