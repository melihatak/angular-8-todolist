import { Component } from '@angular/core';
import { faSearch,faMapMarker,faLocationArrow,faUser,faThermometer,faAddressBook} from '@fortawesome/free-solid-svg-icons'
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Example';
  icons=[faSearch,
          faMapMarker,
          faLocationArrow,
          faUser,
          faThermometer,
          faAddressBook
        ]
        
  configuration ={line:2}
  
  seperateLines(arr){
    let n = this.configuration.line ; 
    var chunkLength = Math.max(arr.length/n ,1);
     var chunks = [];
     for (var i = 0; i < n; i++) {
         if(chunkLength*(i+1)<=arr.length)chunks.push(arr.slice(chunkLength*i, chunkLength*(i+1)));
     }
     return chunks;
  }
 
}


