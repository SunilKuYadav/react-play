export type Direction = 'up' | 'down' | null;
export type ElevatorState = 'idle' | 'moving' | 'maintenance';
export type DoorState = 'open' | 'closed';

export class Elevator {
  private currentFloor: number = 0;
  private direction: Direction = null;
  private state: ElevatorState = 'idle';
  private doorState: DoorState = 'closed';
  private requests: Set<number> = new Set();

  constructor(private id: number) {}

  getId(): number {
    return this.id;
  }

  getCurrentFloor(): number {
    return this.currentFloor;
  }

  getState(): ElevatorState {
    return this.state;
  }

  getDirection(): Direction {
    return this.direction;
  }

  getDoorState(): DoorState {
    return this.doorState;
  }

  addRequest(floor: number): void {
    this.requests.add(floor);
    if (this.state === 'idle') {
      this.direction = floor > this.currentFloor ? 'up' : 'down';
    }
  }

  openDoor(): void {
    if (this.state === 'idle' && this.doorState === 'closed') {
      this.doorState = 'open';
      console.log(`Door opened at floor ${this.currentFloor}`);
    }
  }

  closeDoor(): void {
    if (this.doorState === 'open') {
      this.doorState = 'closed';
      console.log(`Door closed at floor ${this.currentFloor}`);
    }
  }

  moveStep(): void {
    if (this.doorState === 'open') {
      this.closeDoor(); // close door before moving
    }
    if (this.requests.size === 0) {
      this.state = 'idle';
      this.direction = null;
      return;
    }
    this.state = 'moving';
    if (this.direction === 'up') this.currentFloor++;
    else if (this.direction === 'down') this.currentFloor--;

    if (this.requests.has(this.currentFloor)) {
      this.requests.delete(this.currentFloor);
      this.state = 'idle';
      this.openDoor(); // open door on arrival
    }
    if (this.requests.size === 0) {
      this.state = 'idle';
      this.direction = null;
    } else {
      const maxReq = Math.max(...Array.from(this.requests));
      const minReq = Math.min(...Array.from(this.requests));
      if (this.currentFloor < maxReq) this.direction = 'up';
      else if (this.currentFloor > minReq) this.direction = 'down';
      else {
        this.state = 'idle';
        this.direction = null;
      }
    }
  }
}
