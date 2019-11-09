import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server><app-server></app-server>',
  // template: `
  //  <app-server></app-server>
  //  <app-server></app-server>
  //  <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreated = false;
  allowNewServer = false;
  serverCreationStatus = 'No Server was created.';
  serverName = 'Test';
  servers = ['TestServer', 'TestServer2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    // this.serverName = (<HTMLInputElement>event.target).value;
    this.serverCreated = false;
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
