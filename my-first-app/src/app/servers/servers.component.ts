import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //template: '<app-server></app-server><app-server></app-server><app-server></app-server>',
  // template: `
  //  <app-server></app-server>
  //  <app-server></app-server>
  //  <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server was created.';
  serverName = 'Test';
  userName = '';
  userName2 = '';
  buttonOff = true;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
    this.buttonOff = this.userName !== '' ? false : true;
  }

  onClickClear() {
    this.userName = '';
  }




}
