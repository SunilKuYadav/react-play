import { ElevatorController } from './controller';

export class Floor {
  private floorNumber: number;

  constructor(floorNumber: number) {
    this.floorNumber = floorNumber;
  }

  getFloorNumber(): number {
    return this.floorNumber;
  }

  pressUp(controller: ElevatorController): void {
    controller.requestElevator(this.floorNumber);
  }

  pressDown(controller: ElevatorController): void {
    controller.requestElevator(this.floorNumber);
  }
}
