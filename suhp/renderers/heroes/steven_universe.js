extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "suhp:steven/steven_universe_layer1",
    "layer2": "suhp:steven/steven_universe_layer2",
    "legs": "suhp:steven/steven_leg"

});

var utils = implement("fiskheroes:external/utils");
var legs;

function init(renderer) {
    parent.init(renderer);
}

function initEffects(renderer) {
    utils.setOpacity(renderer, 0.99, 1.0);

    var model_legs = renderer.createResource("MODEL", "suhp:shorter_leg");

    model_legs.texture.set("legs");
    legs = renderer.createEffect("fiskheroes:model").setModel(model_legs);
    legs.anchor.set("rightLeg");
    legs.mirror = true;

}

function initAnimations(renderer) {
    parent.initAnimations(renderer);

    /*var idle = addAnimation(renderer, "garnet.IDLE", "suhp:garnet");

    idle.setData(entity => {
        return 1;
    });

    var crouch = addAnimation(renderer, "garnet.CROUCH", "suhp:garnet_crouch");

    crouch.setCondition(entity => {
        return entity.isSneaking();
    });

    crouch.setData(entity => {
        return 1;
    });

    crouch.priority = 2;
    */
}

function render(entity, renderLayer, isFirstPersonArm) {
    if (!isFirstPersonArm && renderLayer == "LEGGINGS" && "BOOTS") {
        legs.render();
    }
}