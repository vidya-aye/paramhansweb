import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  supportstr = [
    {
      Name: 'Sanjay B',
      Deggnation: 'Dyp Manager',
      Mob: ['987654321', '659875521', '124578963']
    },
    {
      Name: 'Rahul M',
      Deggnation: 'Team Lead',
      Mob: ['987654321', '659875521', '124578963']
    },
    {
      Name: 'Ajit W',
      Deggnation: 'Team Lead',
      Mob: ['987654321', '659875521', '124578963']
    },
    {
      Name: 'Ganesh R',
      Deggnation: 'Team Lead',
      Mob: ['987654321', '659875521', '124578963']
    },
    {
      Name: 'Vidya S',
      Deggnation: "Team Lead",
      Mob: ['987654321', '659875521', '124578963']
    },
    {
      Name: 'Amol P',
      Deggnation: 'Team Lead',
      Mob: ['987654321', '659875521', '124578963']
    }

  ]

}
