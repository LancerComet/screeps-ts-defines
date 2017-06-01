/**
 * Screeps Definition,
 * By LancerComet at 1:36, 2017.05.31.
 * # Carry Your World #
 */

declare const WORK: string  // "work"
declare const CARRY: string  // "carry"
declare const MOVE: string  // "move"

declare const RESOURCE_ENERGY: string  // "energy"
declare const ERR_NOT_IN_RANGE: number  // -9
declare const FIND_SOURCES: number  // 105
declare const FIND_HOSTILE_CREEPS: string

declare const STRUCTURE_EXTENSION: string  // "extension"
declare const STRUCTURE_SPAWN: string  // "spawn"
declare const STRUCTURE_TOWER: string  // "tower"

/**
 * Searchable consturction site in your room.
 */
declare const FIND_CONSTRUCTION_SITES: any

declare const Game: {
  spawns: {}
  creeps: {}
  structures: {}

  getObjectById(id: string): RoomObject
}

declare class Source {

}

declare class StructureExtension {
  structureType: any
}
