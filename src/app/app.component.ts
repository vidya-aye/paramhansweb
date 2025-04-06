import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paramhansweb';
}

// add new

// import { Component } from '@angular/core';
// import { AppService } from './app.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'paramhansweb';
//   data: any;
//   name: any;
//   email: any;
//   message: any;


//   constructor(private appService: AppService) {
//     this.getdata1();
//   }

//   getdata1() {
//     this.data.getdata().subscribe(res => {
//       console.log(res)
//       this.data = res
//     })
//   };



//   mymethod() { alert("hello team ") }
// }
