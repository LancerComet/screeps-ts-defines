declare class RoomObject {
  pos: {
    findClosestByRange (target: string) : any
  }
}

declare class Tower extends RoomObject {
  attack (target: number)
}
