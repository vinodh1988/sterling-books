import { Component, OnInit } from '@angular/core';
import { review } from 'src/app/model/review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
reviews:review[]=[];
  constructor(private rs:ReviewService) { }

  ngOnInit(): void {
    this.rs.getReviews("http://localhost:4500/Reviews").subscribe(
      (data:review[])=>this.reviews=data,
      ()=>this.reviews=[]
    )
  }

}
