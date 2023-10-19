class GameState
{
    constructor(name, position, rotation) {
        this.name = name;
        this.position = position;
        this.rotation = rotation;
    }

    toString() {
      return this.name;
    }
}

class GameStates {
    static Home = new GameState('Home', {x: 0, y: 0.5, z: 6}, {x: 0, y: 0, z: 0});
    static Team = new GameState('Contact', {x: -1.3, y: 2.7, z: 2}, {x: 0, y: -30, z: 0});
    static Contact = new GameState('Team', {x: -2, y: 1, z: -1}, {x: 0, y: -70, z: 0});
    static Product = new GameState('Product', {x: 0.7, y: -0.1, z: 2.3}, {x: 0, y: 20, z: 0});

    static Matching(name) {
        var values = Object.values(GameStates);

        for (let i = 0; i < values.length; i++) {
            if (values[i].name == name)
            {
                return values[i]
            }
        }

        console.error('GameStates: no valid entry found for ' + name);
    }
}