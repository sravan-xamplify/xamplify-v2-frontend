import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgxEditorModule, Validators, Editor, Toolbar } from 'ngx-editor';
import {
  AngularEditorModule,
  AngularEditorConfig,
} from '@kolkov/angular-editor';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import jsonDoc from '../../../shared/data/ngxeditor';
import { HttpClientModule } from '@angular/common/http';
@Component({
    selector: 'app-form-editor',
    imports: [SharedModule, NgxEditorModule, AngularEditorModule, FormsModule, ReactiveFormsModule, HttpClientModule],
    templateUrl: './form-editor.component.html',
    styleUrl: './form-editor.component.scss'
})
export class FormEditorComponent {
  editordoc = jsonDoc;

  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl(
      { value: jsonDoc, disabled: false },
      Validators.required()
    ),
  });

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
  // Angular Editor
  htmlContent = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
}
