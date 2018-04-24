import { Component, Input } from '@angular/core';
import { SessionService } from './evo/service/session/session.service';
import { Session } from './evo/model/session/session.model';
import { AppHelper } from './util/apphelper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  
})
export class AppComponent {
  
  @Input()
  session: Session;
  
  constructor (private sessionService : SessionService, private helper : AppHelper) {
      this.session = new Session();
      this.sessionService.start("default", this.session, {"userName":"Super", "password":"S3cret"});
      if (!this.helper.isNull(this.session.success())) {
        console.log("logged in", this.session);
      } else {
        console.error("Unable to log in");
      }
  }

}
