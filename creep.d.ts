/// <reference path="index.d.ts" />

/**
 * Creep.
 *
 * @class Creep
 */
declare class Creep {
  build ()

  /**
   * Stuffs in carrying.
   */
  carry: {
    energy: any
  }

  carryCapacity: any

  /**
   * Harvest resource.
   *
   * @param {Source} source
   * @memberof Creep
   */
  harvest (source: Source)

  /**
   * Move to a destinition,
   *
   * @param {Source} soruce
   * @memberof Creep
   */
  moveTo (soruce: Source, options: {
    visualizePathStyle: {
      stroke: string
    }
  })

  memory: {
    /**
     * Define this creep is whether in building status or not.
     * @type {boolean}
     */
    building: boolean

    /**
     * Define the type of this creeper.
     */
    role: 'harvester' | 'upgrader' | 'builder'
  }


  /**
   * Room reference.
   *
   * @type {Room}
   * @memberof Creep
   */
  room: Room

  /**
   * Say something.
   *
   * @param {string} content
   * @memberof Creep
   */
  say (content: string): void

  /**
   * Kill itself.
   */
  suicide (): void

  transfer(spawn: Spawn, RESOURCE_ENERGY)
}
