import { describe, beforeEach, test, expect } from "vitest";
import TripManager from "../tripManager.ts";
import Accommodation from "../accommodation.ts";
import City from "../city.ts";


function createCity(): City {
  return new City(
    "TestCity",
    "TestCountry",
    new Date("2023-05-01"),
    new Date("2023-05-04"),
    "Notas",
    new Accommodation("acc de prueba", 1000),
  );
}

describe("TripManager", () => {
  let manager: TripManager;
  let city: City;
  beforeEach(() => {
    manager = new TripManager();
    city = createCity();
  });

  test("get cities", () => {
    expect(manager.getAllCities()).toEqual([]);
  });

  test("find city by name", () => {
    manager.addCity(city);
    expect(manager.findCityByName("TestCity")).toBe(city);
  });

  test("find city by name returns null if not found", () => {
    expect(manager.findCityByName("NonExistentCity")).toBeNull();
  });
});
