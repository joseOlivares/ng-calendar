import { Component, signal } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
@Component({
  selector: 'app-stepper',
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  currentStep = signal(0);
  currentSubStep = signal(0);

  steps = [
    {
      title: 'Información personal',
      icon: 'user',
      subSteps: ['Nombre', 'Dirección', 'Contacto'],
    },
    {
      title: 'Detalles de cuenta',
      icon: 'gear',
      subSteps: ['Email', 'Contraseña'],
    },
    {
      title: 'Confirmación',
      icon: 'check-circle',
      subSteps: [],
    },
  ];

  goToStep(stepIndex: number) {
    this.currentStep.set(stepIndex);
    this.currentSubStep.set(0);
  }

  goToSubStep(subStepIndex: number) {
    this.currentSubStep.set(subStepIndex);
  }
}
