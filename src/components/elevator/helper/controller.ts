import { Elevator } from './elevator';

export class ElevatorController {
  constructor(private elevators: Elevator[]) { }

  private schedulingStrategy(floor: number): Elevator {
    let chosen = this.elevators.find(e => e.getState() === 'idle');
    if (!chosen) chosen = this.elevators[0];
    return chosen;
  }

  requestElevator(floorNumber: number, isUp: boolean): void {
    const elevator = this.schedulingStrategy(floorNumber);
    elevator.addRequest(floorNumber);
  }

  step(): void {
    this.elevators.forEach(e => e.moveStep());
  }
}
