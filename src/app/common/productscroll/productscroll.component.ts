import { Component, OnInit, Input } from '@angular/core';
import { book } from 'src/app/model/book';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productscroll',
  templateUrl: './productscroll.component.html',
  styleUrls: ['./productscroll.component.css']
})
export class ProductscrollComponent implements OnInit {
books:book[]=[];
@Input() productTitle:string="";
@Input() pattern:string="";
  constructor(private bs:ProductService) { }

  ngOnInit(): void {
    this.bs.getBooks("http://localhost:4500/books"+this.pattern).subscribe(
      (data:book[])=>this.books=data,
      ()=>this.books=[]
    )
  }


}
