import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective {

  
  constructor(private obj:ElementRef) { 
    this.obj.nativeElement.setAttribute('style', 'color: yellow; font-weight: bold; background:black');
  }
  
}
