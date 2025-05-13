import { Component, ElementRef } from '@angular/core';
import { Fancybox } from "@fancyapps/ui"

@Component({
  selector: 'app-documents',
  imports: [],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss'
})
export class DocumentsComponent {

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    Fancybox.bind(this.elRef.nativeElement, '[data-fancybox="gallery"]', {
      closeButton: "auto"
    });
  }

  ngOnDestroy() {
    Fancybox.unbind(this.elRef.nativeElement);
    Fancybox.close();
  }

}
