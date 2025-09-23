import React, { useEffect, useRef, useState } from "react";
import { Building } from "./helper/building"; // assuming building/controller/elevator/floor are in separate files

const FLOOR = 3;
const FLOOR_HEIGHT = 150;
const LIFT_HEIGHT = 100;
const LIFT_MOVE_TIME = 0.5;

const Elevator: React.FC = () => {
  // Create building and elevator instances only ONCE
  const buildingRef = useRef<Building>(new Building("Main", FLOOR, 1)); // 1 elevator
  const controller = buildingRef.current.getController();
  const elevator = buildingRef.current.getElevators()[0];

  const [currentFloor, setCurrentFloor] = useState(elevator.getCurrentFloor());

  // Animate/tick elevator
  useEffect(() => {
    const interval = setInterval(() => {
      controller.step();
      setCurrentFloor(elevator.getCurrentFloor());
    }, LIFT_MOVE_TIME * 1000);

    return () => clearInterval(interval);
  }, [controller, elevator]);

  // Handle call buttons
  const handleCall = (floor: number, isUp: boolean) => {
    controller.requestElevator(floor, isUp);
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        {Array.from({ length: FLOOR }).map((_, index) => {
          const floorNum = FLOOR - index;
          return (
            <div
              key={floorNum}
              style={{
                width: "200px",
                height: `${FLOOR_HEIGHT}px`,
                border: "1px solid red",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>Floor: {floorNum}</p>
              <button onClick={() => handleCall(floorNum, true)}>Up</button>
              <p>{currentFloor}</p>
              <button onClick={() => handleCall(floorNum, false)}>Down</button>
            </div>
          );
        })}
      </div>
      <div>
        <div
          style={{
            width: "250px",
            height: `${LIFT_HEIGHT}px`,
            border: "1px solid red",
            transform: `translateY(${(FLOOR - currentFloor) * FLOOR_HEIGHT}px)`,
            transition: `all ${LIFT_MOVE_TIME}s ease`,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            {Array.from({ length: FLOOR }).map((_, index) => {
              const floor = index + 1;
              return (
                <button
                  key={floor}
                  style={{ width: "3rem", padding: "0.5rem" }}
                  onClick={() => handleCall(floor, floor > currentFloor)}
                >
                  {floor}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Elevator };
