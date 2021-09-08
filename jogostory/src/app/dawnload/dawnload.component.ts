
import { Component, OnInit, NgModule } from '@angular/core';
import  {  OwlOptions  }  from  'ngx-owl-carousel-o' ;


@Component({
  selector:'ngbd-carousel-basic',
  templateUrl: './dawnload.component.html',
  providers: [

 ],

  styleUrls: ['./dawnload.component.css']
})
export class DawnloadComponent implements OnInit {



  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag:true,
    touchDrag:true,
    pullDrag:true,
    dots:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
