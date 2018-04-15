import { Component } from '@angular/core';
import { SessionService } from './evo/service/session/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  
})
export class AppComponent {
  
  constructor (private sessionService : SessionService) {
      this.sessionService.startTx("default", {});
  }

}
