class animal{
  constructor(sound, type, name){
    this.sound = sound
    this.type = type
    this.name = name
  }

}


class cat extends animal{
  constructor(name){
    super("야옹", "포유류", name);
  }
}