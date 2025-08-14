import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as prismCodeData from '../../../../shared/data/prismData/forms/input_group'
import { ShowcodeCardComponent } from '../../../../shared/components/showcode-card/showcode-card.component';

@Component({
    selector: 'app-inputgroup',
    imports: [SharedModule, NgSelectModule, NgbModule, ReactiveFormsModule, FormsModule, ShowcodeCardComponent],
    templateUrl: './inputgroup.component.html',
    styleUrl: './inputgroup.component.scss'
})
export class InputgroupComponent {
  prismCode = prismCodeData;
 
  selectedSimpleItem = 'Choose...';
  simpleItems:any = [];
  // Select2
  selectedSimpleItem1 = 'Choose...';
  simpleItems1:any = [];
   // Select3
   selectedSimpleItem3 = 'Choose...';
   simpleItems3:any = [];
    // Select4
  selectedSimpleItem4 = 'Choose...';
  simpleItems4:any = [];


  ngOnInit() {
    this.simpleItems = ['Choose...','one','two','three'];
    this.simpleItems1 = ['Choose...','one','two','three'];
    this.simpleItems3 = ['Choose...','one','two','three'];
    this.simpleItems4 = ['Choose...','one','two','three'];
}
}
