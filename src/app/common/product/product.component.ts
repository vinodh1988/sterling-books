import { Component, OnInit, Input } from '@angular/core';
import { book } from 'src/app/model/book';
interface star{
  starclass:string;
  starstyle:any;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() book:book;
  styles:star[]=[{starclass:"fa fa-star",starstyle:{}},
  {starclass:"fa fa-star",starstyle:{}},
  {starclass:"fa fa-star",starstyle:{}},
  {starclass:"fa fa-star",starstyle:{}},
  {starclass:"fa fa-star",starstyle:{}}]

  constructor() { }

  ngOnInit(): void {
        for(let x=0;x<Number(this.book.rating);x++)
        {
          this.styles[x].starclass="fa fa-star checked";
          this.styles[x].starstyle={color:"yellow"}
        }
  }

}
