import { Elevator } from './elevator';

export class ElevatorController {
  private elevators: Elevator[];
  constructor(elevators: Elevator[]) {
    this.elevators = elevators;
  }

  private schedulingStrategy(): Elevator {
    let chosen = this.elevators.find(e => e.getState() === 'idle');
    if (!chosen) chosen = this.elevators[0];
    return chosen;
  }

  requestElevator(floorNumber: number): void {
    const elevator = this.schedulingStrategy();
    elevator.addRequest(floorNumber);
  }

  step(): void {
    this.elevators.forEach(e => e.moveStep());
  }
}
