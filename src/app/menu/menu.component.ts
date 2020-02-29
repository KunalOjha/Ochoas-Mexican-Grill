import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  panelOpenState = false;
  foodOptions = [
    {
      title: 'Tacos',
      foods: [
        {
          name: 'Steak',
          details: 'Lettuce, Tomato, Cheese',
          price: 3
        },
        {
          name: 'Skirt Steak',
          details: 'Grilled Onions, Cilantro, Avocado',
          price: 4
        },
        {
          name: 'Chicken',
          details: 'Lettuce, Tomato, Cheese',
          price: 3
        },
        {
          name: 'Pork',
          details: 'Lettuce, Tomato, Cheese',
          price: 3.85
        },
        {
          name: 'Ground Beef',
          details: 'Onion and Cilantro',
          price: 3
        },
        {
          name: 'CHorizo',
          details: 'Onion and Cilantro',
          price: 3
        },
        {
          name: 'Chicaron',
          details: 'Your way!',
          price: 3
        },
        {
          name: 'Fish',
          details: 'Your way!',
          price: 4
        },
        {
          name: 'Carnitas',
          details: 'Lettuce, Tomato',
          price: 3.85
        },
        {
          name: '3pc Taco Dinner',
          details: 'Served with Rice and Beans',
          price: 9.95
        },
        {
          name: "Ochoa's Super Taco",
          details: 'Your choice of meat, on a pita, grilled onions, roasted banana peppers, guacamole, spicy sauce',
          price: 'Reg $7.50 Skirt $8.50'
        },
      ]
    },
    {
      title: 'Burritos',
    },
    { title: 'Gorditas' },
    { title: 'Sopes' },
    { title: 'Enchilladas' },
    { title: 'Tortas' },
  ]
}


