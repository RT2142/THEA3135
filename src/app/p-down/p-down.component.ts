import { Component, OnInit } from '@angular/core';
const FileSaver = require('file-saver');
declare var require: any

@Component({
  selector: 'app-p-down',
  templateUrl: './p-down.component.html',
  styleUrls: ['./p-down.component.css']
})
export class PDownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPdf() {
    const pdfUrl = 'TERMS and CONDITIONS.pdf';
    const pdfName = 'TERMS and CONDITIONS';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}
