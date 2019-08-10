import { Component } from '@angular/core';
import { faSearch,faMapMarker,faLocationArrow,faUser,faThermometer,faAddressBook} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Example';
 icons=[faSearch,faMapMarker,faLocationArrow,faUser,faThermometer,faAddressBook]
configuration ={line:3}
}
