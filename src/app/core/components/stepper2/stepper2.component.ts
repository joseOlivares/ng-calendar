import { Component, computed, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-stepper2',
  imports: [CommonModule],
  templateUrl: './stepper2.component.html',
  styleUrl: './stepper2.component.scss'
})
export class Stepper2Component {
 steps = input<Step[]>([
  {title:'Paso 1', description:'Contenido del paso 1'},
  {title:'Paso 2', description:'Contenido del paso 2'},
  {title:'Paso 3', description:'Contenido del paso 3'},
  ]);
 currentStep = input<number>(2);

  // Computed property to determine if stepper should be vertical
  isVertical = computed(() => {
    // You could also use window.innerWidth here with a host listener
    // but for simplicity we'll just check step count for mobile layout
    return this.steps().length > 3; // Switch to vertical if more than 3 steps
  });

}

export interface Step {
  title: string;
  description?: string;
}
