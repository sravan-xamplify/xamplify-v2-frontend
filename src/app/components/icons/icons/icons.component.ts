import { Component, ElementRef } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-icons',
    imports: [SharedModule, NgbModule],
    templateUrl: './icons.component.html',
    styleUrl: './icons.component.scss'
})
export class IconsComponent {

}
