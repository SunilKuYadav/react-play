import { Floor } from './floor';
import { Elevator } from './elevator';
import { ElevatorController } from './controller';

export class Building {
  private name: string;
  private floors: Floor[];
  private elevators: Elevator[];
  private controller: ElevatorController;

  constructor(name: string, numFloors: number, numElevators: number) {
    this.name = name;
    this.floors = Array.from({ length: numFloors }, (_, i) => new Floor(i));
    this.elevators = Array.from({ length: numElevators }, (_, i) => new Elevator(i));
    this.controller = new ElevatorController(this.elevators);
  }

  getName(): string {
    return this.name;
  }

  getFloors(): Floor[] {
    return this.floors;
  }

  getElevators(): Elevator[] {
    return this.elevators;
  }

  getController(): ElevatorController {
    return this.controller;
  }
}
