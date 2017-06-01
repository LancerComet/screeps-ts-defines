/**
 * Param for createCreep funtion.
 *
 * @interface ICreepOptions
 */
interface ICreepOptions {
  role: 'harvester' | 'upgrader' | 'builder'
}

/**
 * Spawn.
 *
 * @class Spawn
 */
declare class Spawn {
  /**
   * Create a creep worker.
   *
   * @param {Array<any>} bodyPartsConfig
   * @param {string} creepName
   * @param {ICreepOptions} config
   * @returns {string} Name of this new creep.
   *
   * @memberof Spawn
   */
  createCreep(bodyPartsConfig: Array<any>, creepName: string, config: ICreepOptions): string

  /**
   * Position of this spawn point.
   *
   * @type {{
   *     x: number
   *     y: number
   *   }}
   * @memberof Spawn
   */
  pos: {
    x: number
    y: number
  }

  /**
   * Creep in spawning.
   *
   * @type {Creep | null}
   * @memberof Spawn
   */
  spawning: Creep | null

  /**
   * Room reference.
   * Refer to the room that this spawn lives in.
   *
   * @type {Room}
   * @memberof Spawn
   */
  room: Room
}
