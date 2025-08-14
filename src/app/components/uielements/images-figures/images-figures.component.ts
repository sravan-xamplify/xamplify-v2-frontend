import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import * as PrismCode from '../../../shared/data/prismData/image_figures'
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';

@Component({
    selector: 'app-images-figures',
    imports: [SharedModule, ShowcodeCardComponent],
    templateUrl: './images-figures.component.html',
    styleUrls: ['./images-figures.component.scss']
})
export class ImagesFiguresComponent {
  prsimCodeData: any = PrismCode;
}