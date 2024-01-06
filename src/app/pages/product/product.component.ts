import { Component } from '@angular/core';
import { DatailsProductComponent } from "../../components/datails-product/datails-product.component";

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    imports: [DatailsProductComponent]
})
export class ProductComponent {

}
