extend("fiskheroes:hero_basic");
loadTextures({
    "head": "suhp:garnet/garnet_head_texture",
    "l_arm": "suhp:garnet/garnet_left_arm_texture",
    "l_leg": "suhp:garnet/garnet_left_leg_texture",
    "r_arm": "suhp:garnet/garnet_right_arm_texture",
    "r_leg": "suhp:garnet/garnet_right_leg_texture",
    "body": "suhp:garnet/garnet_body_texture",
    "gem": "suhp:gem",
});

var utils = implement("fiskheroes:external/utils");
var pearl = implement("suhp:external/pearl_models");


function init(renderer) {
    parent.init(renderer);

    renderer.setTexture((entity, renderLayer) => renderLayer == "CHESTPLATE" ? "gem" : null)

    renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "rightLeg", "leftLeg");
    renderer.fixHatLayer("CHESTPLATE");
}

function initEffects(renderer) {
    utils.setOpacity(renderer, 0.99, 1.0);
    pearl.initModels(renderer);
}

function initAnimations(renderer) {
    parent.initAnimations(renderer);
    /*
        var idle = addAnimation(renderer, "garnet.IDLE", "suhp:garnet");

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
    /* lines_garnet.progress = lines_garnet.opacity = entity.getInterpolatedData("suhp:dyn/gauntlet_timer");
     lines_garnet.render();
     */

    pearl.render(entity, renderLayer, isFirstPersonArm);
}