import { Component } from '@angular/core';

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
          price: '$3.00'
        },
        {
          name: 'Skirt Steak',
          details: 'Grilled Onions, Cilantro, Avocado',
          price: '$4.00'
        },
        {
          name: 'Chicken',
          details: 'Lettuce, Tomato, Cheese',
          price: '$3.00'
        },
        {
          name: 'Al Pastor',
          details: 'Lettuce, Tomato, Cheese',
          price: '$3.85'
        },
        {
          name: 'Ground Beef',
          details: 'Onion and Cilantro',
          price: '$3.00'
        },
        {
          name: 'Chorizo',
          details: 'Onion and Cilantro',
          price: '$3.00'
        },
        {
          name: 'Chicarron',
          details: 'Your way!',
          price: '$3.00'
        },
        {
          name: 'Fish',
          details: 'Your way!',
          price: '$4.00'
        },
        {
          name: 'Carnitas',
          details: 'Lettuce, Tomato',
          price: '$3.85'
        },
        {
          name: '4pc Potato Cheese Tacos',
          details: 'Served with Rice and Beans',
          price: '$9.95'
        },
        {
          name: '3pc Taco Dinner',
          details: 'Served with Rice and Beans',
          price: '$11.00'
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
          price: '$8.50'
        },
        {
          name: 'Skirt Steak',
          price: '$11.99'
        },
        {
          name: 'Chicken',
          price: '$8.50'
        },
        {
          name: 'Al Pastor',
          price: '$8.50'
        },
        {
          name: 'Ground Beef',
          price: '$8.50'
        },
        {
          name: 'Carnitas',
          price: '$9.99'
        },
        {
          name: 'Veggie',
          price: '$8.50'
        },
        {
          name: 'Veggie Tostada',
          price: '$5.50'
        }
      ]
    },
    {
      title: 'Gorditas',
      foods: [
        {
          name: 'Steak',
          price: '$5.25'
        },
        {
          name: 'Chicken',
          price: '$5.25'
        },
        {
          name: 'Chicarron',
          price: '$5.25'
        },
        {
          name: 'Ground Beef',
          price: '$5.25'
        },
        {
          name: 'Skirt Steak',
          price: '$6.50'
        },
        {
          name: 'Rajas',
          price: '$5.25'
        }
      ]
    },
    {
      title: 'Sopes',
      foods: [
        {
          name: 'Skirt Steak',
          price: '$6.50'
        },
        {
          name: 'Steak',
          price: '$5.25'
        },
        {
          name: 'Chicken',
          price: '$5.25'
        },
        {
          name: 'Ground Beef',
          price: '$5.25'
        },
        {
          name: 'Chicharron',
          price: '$5.25'
        },
        {
          name: 'Rajas',
          price: '$5.25'
        }
      ]
    },
    {
      title: 'Enchilladas',
      foods: [
        {
          name: 'Skirt Steak',
          price: '$11.50'
        },
        {
          name: 'Steak',
          price: '$10.50'
        },
        {
          name: 'Chicken',
          price: '$10.50'
        },
        {
          name: 'Al Pastor',
          price: '$10.50'
        },
        {
          name: 'Ground Beef',
          price: '$10.25'
        },
        {
          name: 'No Meat',
          price: '$9.50'
        }
      ]
    },
    {
      title: 'Tortas',
      foods: [
        {
          name: 'Skirt Steak',
          price: '$11.99'
        },
        {
          name: 'Steak',
          price: '$8.50'
        },
        {
          name: 'Chicken',
          price: '$8.50'
        },
        {
          name: 'Ground Beef',
          price: '$8.50'
        },
        {
          name: 'Chicharron',
          price: '$8.85'
        },
        {
          name: 'Carnitas',
          price: '$9.99'
        },
        {
          name: 'Milanesa de Pollo',
          price: '$9.00'
        }
      ]
    },
    {
      title: 'Quesadillas',
      foods: [
        {
          name: 'Skirt Steak',
          price: '$10.99'
        },
        {
          name: 'Steak',
          price: '$8.50'
        },
        {
          name: 'Chicken',
          price: '$8.50'
        },
        {
          name: 'Ground Beef',
          price: '$8.50'
        },
        {
          name: 'Al Pastor',
          price: '$8.50'
        },
        {
          name: 'Chicharron',
          price: '$8.50'
        },
        {
          name: 'Carnitas',
          price: '$9.99'
        }
      ]
    },
    {
      title: 'Nachos',
      foods: [
        {
          name: 'Skirt Steak',
          price: '$11.99'
        },
        {
          name: 'Steak',
          price: '$8.50'
        },
        {
          name: 'Chicken',
          price: '$8.50'
        },
        {
          name: 'Ground Beef',
          price: '$8.50'
        },
        {
          name: 'Al Pastor',
          price: '$8.50'
        },
        {
          name: 'Chicharron',
          price: '$8.85'
        },
        {
          name: 'Carnitas',
          price: '$9.99'
        }
      ]
    },
    {
      title: 'Platillos',
      foods: [
        {
          name: 'Chicken Breast w/ Veggies',
          price: '$9.85'
        },
        {
          name: 'Skirt Steak Fajitas',
          price: '$18.50'
        },
        {
          name: 'Chicken Fajitas',
          price: '$17.50'
        },
        {
          name: 'Al Pastor Fajitas',
          price: '$17.50'
        },
        {
          name: 'Shrimp Fajitas',
          price: '$17.50'
        },
        {
          name: 'Lien and Chile de Arbol',
          price: '$14.99'
        },
        {
          name: 'Steak a La Mexicana',
          price: '$15.99'
        },
        {
          name: 'Skirt Steak Platter',
          price: '$21.50'
        }
      ]
    },
    {
      title: 'Breakfast',
      foods: [
        {
          name: 'Chilaquiles',
          price: '$8.50'
        },
        {
          name: 'Breakfast Burrito',
          price: '$9.50'
        },
        {
          name: 'Mexican Eggs',
          price: '$8.50'
        },
        {
          name: 'Huevos Rancheros',
          price: '$8.50'
        }
      ]
    },
    {
      title: 'Specials',
      foods: [
        {
          name: 'Carnitas (per lb.)',
          price: '$11.50'
        },
        {
          name: 'Tacos de Birria',
          price: '$4.00'
        },
        {
          name: 'Birria',
          price: '$15.00 / $22.00 1 Gal (To-Go)'
        }
      ]
    },
    {
      title: 'Desserts',
      foods: [
        {
          name: 'Caramel Churro',
          price: '$2.50'
        },
        {
          name: 'Caramel Churros (2pcs) served with vanilla ice cream',
          price: '$6.00'
        },
        {
          name: 'Vanilla Ice Cream (1 cup)',
          price: '$2.00'
        },
        {
          name: 'Rice Pudding',
          price: '$2.50'
        }
      ]
    },
    {
      title: 'Sides',
      foods: [
        {
          name: 'Beans / Frijoles (12 oz)',
          price: '$3.95'
        },
        {
          name: 'Rice / Arroz (12 oz)',
          price: '$3.95'
        },
        {
          name: 'Guacamole & Chips',
          price: '$6.50'
        },
        {
          name: 'Chips & Salsa',
          price: '$2.50'
        },
        {
          name: 'Pico de Gallo Chips & Salsa',
          price: '$4.00'
        },
        {
          name: 'French Fries',
          price: '$3.00'
        },
        {
          name: 'Cooked Vegetables',
          price: '$4.00'
        },
      ]
    }
  ]
}


