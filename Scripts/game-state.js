/**
 * Handles the connection of the various game states and how to move between them.
 */
AFRAME.registerComponent('game-state', {
    init: function() {
        this.setState(GameStates.Home.name);
    },

    setState: function(state) {
        this.state = GameStates.Matching(state);

        var pos = this.state.position;
        var rot = this.state.rotation;

        this.setCameraPosition(pos.x, pos.y, pos.z, rot.x, rot.y, rot.z);
/*
        var contactTextfield = document.getElementById('Contact');
        var isVisible = (state === 'Contact');
        contactTextfield.setAttribute('visible', isVisible); */
    },

    setCameraPosition: function(x, y, z, rx, ry, rz) {
        var mainCamera = document.getElementById('mainCameraWrapper').components['main-camera'];
        mainCamera.setCameraPosition(x, y, z, rx, ry, rz);
    } 
});