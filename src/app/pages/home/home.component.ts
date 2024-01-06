import { Component } from '@angular/core';
import { BigBannerComponent } from "../../components/big-banner/big-banner.component";
import { SmallBannerComponent } from "../../components/small-banner/small-banner.component";
import { TextBannerComponent } from "../../components/text-banner/text-banner.component";
import { ProductsComponent } from "../../components/products/products.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [BigBannerComponent, SmallBannerComponent, TextBannerComponent, ProductsComponent]
})
export class HomeComponent {

}
