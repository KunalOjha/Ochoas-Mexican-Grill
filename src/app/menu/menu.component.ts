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
          name: 'Chorizo',
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
      foods: [
        {
          name: 'Steak',
          price: 8.5
        },
        {
          name: 'Skirt Steak',
          price: 11.99
        },
        {
          name: 'Chicken',
          price: 8.5
        },
        {
          name: 'Pork',
          price: 8.5
        },
        {
          name: 'Ground Chicken',
          price: 8.5
        },
        {
          name: 'Braised Pork',
          price: 9.99
        },
        {
          name: 'Try our Veggie Burrito',
          price: 8.5
        },
        {
          name: 'Veggie Tostada',
          price: 5.5
        }
      ]
    },
    {
      title: 'Gorditas',
      foods: [
        {
          name: 'Steak',
          price: 5.25
        },
        {
          name: 'Chicken',
          price: 5.25
        },
        {
          name: 'Chicaron',
          price: 5.25
        },
        {
          name: 'Skirt Steak',
          price: 6.5
        },
        {
          name: 'Rajas',
          price: 5.25
        }
      ]
    },
    {
      title: 'Sopes',
      foods: [
        {
          name: 'Skirt Steak',
          price: 6.50
        },
        {
          name: 'Steak',
          price: 5.25
        },
        {
          name: 'Chicken',
          price: 5.25
        },
        {
          name: 'Ground Beef',
          price: 5.25
        },
        {
          name: 'Chicharron',
          price: 5.25
        },
        {
          name: 'Rajas',
          price: 5.25
        }
      ]
    },
    {
      title: 'Enchilladas',
      foods: [
        {
          name: 'Skirt Steak',
          price: 11.50
        },
        {
          name: 'Steak',
          price: 10.5
        },
        {
          name: 'Chicken',
          price: 10.5
        },
        {
          name: 'Al Pastor',
          price: 10.5
        },
        {
          name: 'Ground Beef',
          price: 10.25
        },
        {
          name: 'No Meat',
          price: 9.5
        }
      ]
    },
    {
      title: 'Tortas',
      foods: [
        {
          name: 'Skirt Steak',
          price: 11.99
        },
        {
          name: 'Steak',
          price: 8.5
        },
        {
          name: 'Chicken',
          price: 8.5
        },
        {
          name: 'Ground Beef',
          price: 8.5
        },
        {
          name: 'Chicharron',
          price: 8.85
        },
        {
          name: 'Carnitas',
          price: 9.99
        },
        {
          name: 'Milanesa de Pollo',
          price: 9
        }
      ]
    },
  ]
}


