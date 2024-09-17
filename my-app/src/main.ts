import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { DefaltComponent } from './app/component/defalt.component';

bootstrapApplication(DefaltComponent, appConfig)
  .catch((err) => console.error(err));
