declare class Room {
  controller: {
    activateSafeMode ()
  }

  /**
   * Create a new construction site.
   *
   * @param {number} positionX
   * @param {number} positionY
   * @param {string} type
   *
   * @memberof Room
   */
  createConstructionSite (positionX: number, positionY: number, type: string)

  /**
   * Total energy in this room.
   *
   * @type {number}
   * @memberof Room
   */
  energyAvailable: number

  /**
   * Find some target in this room.
   *
   * @param {*} target
   * @memberof Room
   */
  find (target: any, options: {
    filter: Function
  })

  /**
   * Name for this room.
   *
   * @type {string}
   * @memberof Room
   */
  name: string

  visual: {
    text (text: string, positionX, positionY, options: {
      align: string, opacity: number
    })
  }
}
