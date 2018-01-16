import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { ImportService } from '../../../../service/import.service';
@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {
  @ViewChild('priceFileInput') priceInput;
  @ViewChild('amountFileInput') amountInput;
  priceFileList = [];
  constructor(private http: Http, private importService: ImportService) { }

  ngOnInit() {
  }

  fileChangePrice(): void {
    const fi = this.priceInput.nativeElement;
    if (fi.files && fi.files[0]) {
      const fileToUpload = fi.files[0];
      this.importService.importPriceFile(fileToUpload);
    }
  }
  fileChangeAmount(): void {
    const fi = this.amountInput.nativeElement;
    if (fi.files && fi.files[0]) {
      const fileToUpload = fi.files[0];
      this.importService.importAmountFile(fileToUpload);
    }
  }
  reset() {
    this.importService.reset();
  }
}
