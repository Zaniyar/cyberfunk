AFRAME.registerComponent('main-camera', {
    init: function()
    {
        document.getElementById('mainCamera').setAttribute('wasd-controls', 'enabled', false);
    },
    
    tick: function()
    {
        TWEEN.update();
    },

    setCameraPosition: function(x, y, z, rx, ry, rz, duration) 
    {
        var wrapper = this.el;

        wrapper.setAttribute('animation__position', {
            property: 'position',
            to: {x: x, y: y, z: z},
            dur: duration,
            easing: 'easeInOutQuad'
        });
        wrapper.setAttribute('animation__rotation', {
            property: 'rotation',
            to: {x: rx, y: ry, z: rz},
            dur: duration,
            easing: 'easeInOutQuad'
        });

        this.resetLookControls(duration);
    },

    resetLookControls: function(duration) 
    {
        var lookControls = this.el.children[0].components['look-controls'];

        new TWEEN.Tween(lookControls.pitchObject.rotation)
            .to({x: 0, y: 0, z: 0}, duration)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start();
        new TWEEN.Tween(lookControls.yawObject.rotation)
            .to({x: 0, y: 0, z: 0}, duration)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start();
    }
});