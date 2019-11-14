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
  OnDestroy
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

  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
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

  ngAfterCViewInit() {
    console.log('ngAfterViewInit called');
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestory() {
    console.log('ngOnDestory Called');
  }



}
