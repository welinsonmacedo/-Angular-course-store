import { Component, Input, OnInit } from '@angular/core';
import ProductsData from '../../../assets/Data/Productsdata.json';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() nameProduct: string = '';
  @Input() priceProduct: string = '';
  @Input() parcelProduct: string = '';
  @Input() pictureProduct: string = '';

  productsData: any[] = [];

  constructor(
    ) {}

  ngOnInit(): void {
    const maxItems = ProductsData.length;
    this.productsData = Array.isArray(ProductsData)
      ? ProductsData.slice(0, maxItems)
      : [ProductsData];


    if (this.productsData.length > 0) {
      const firstProduct = this.productsData[0];
      this.nameProduct = firstProduct.nome;
      this.priceProduct = firstProduct.preco;
      this.parcelProduct = firstProduct.parcelamento;
      this.pictureProduct = firstProduct.imagem;
    } else {
      console.log('O array de dados de produtos está vazio.');
    }
  }

}



