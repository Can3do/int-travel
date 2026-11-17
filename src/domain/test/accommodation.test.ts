import { describe, beforeEach, test, expect } from "vitest";
import Accommodation from "../accommodation.ts";

describe("Accommodation", () => {
  let accommodation: Accommodation;
  beforeEach(() => {
    accommodation = new Accommodation("acc de prueba", 1000);
    void accommodation;
  });

  describe("Accommodation name", () => {
    test("should get name correctly", () => {
      expect(accommodation.getName()).toBe("acc de prueba")
    });
    
    test("should set name correctly", () => {
      expect(() => accommodation.setName("otro nombre")).not.toThrow();
      expect(accommodation.getName()).toBe("otro nombre")
    });
  });

  describe("Accommodation cost", () => {
    test("should get cost correctly", () => {
      expect(accommodation.getCost()).toBe(1000);
    });
    test("should set cost correctly", () => {
      expect(() => accommodation.setCost(3000)).not.toThrow();
      expect(accommodation.getCost()).toBe(3000);
    });
    test("trying to set cost under 0 should throw an error", () => {
      expect(() => accommodation.setCost(-1)).toThrow();
    });
  });
});
