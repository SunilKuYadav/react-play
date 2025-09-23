import { ElevatorController } from './controller';

export class Floor {
  constructor(private floorNumber: number) {}

  getFloorNumber(): number {
    return this.floorNumber;
  }

  pressUp(controller: ElevatorController): void {
    controller.requestElevator(this.floorNumber, true);
  }

  pressDown(controller: ElevatorController): void {
    controller.requestElevator(this.floorNumber, false);
  }
}
