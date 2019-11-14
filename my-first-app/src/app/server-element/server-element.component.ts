import { Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef
 } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  // @Input() element: {type: string, name: string, content: string};

  // tslint:disable-next-line: no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  @ViewChild('heading', {static: true}) header: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Test content:  ' + this.header.nativeElement.textContent);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChange) {
    console.log('ngOnChnages called');
    console.log(changes);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngDoCheck() {
    console.log('ngDoCheck Called');
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('Test content:  ' + this.header.nativeElement.textContent);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestory() {
    console.log('ngOnDestory Called');
  }



}
