/**
 * Screeps Definition,
 * By LancerComet at 1:36, 2017.05.31.
 * # Carry Your World #
 */

declare const WORK
declare const CARRY
declare const MOVE

declare const RESOURCE_ENERGY: any
declare const ERR_NOT_IN_RANGE: any
declare const FIND_SOURCES: any

declare const Game: {
  spawns: any
  creeps: {}
}

/**
 * Spawn object in your room.
 *
 * @class Spawn
 */
declare class Spawn {
  /**
   * Create a creep worker.
   *
   * @param {Array<any>} options
   * @param {string} workerName
   * @returns {Creep}
   *
   * @memberof Spawn
   */
  createCreep(options: Array<any>, workerName: string): Creep
}

/**
 * Creep in your room.
 *
 * @class Creep
 */
declare class Creep {
  carry: {
    energy: any
  }

  harvest(source: Source)

  moveTo(soruce: Source)

  memory: {
    role: string
  }

  room: {
    find (FIND_SOURCES)
  }

  transfer(spawn: Spawn, RESOURCE_ENERGY)
}

declare class Source {

}
