extend("fiskheroes:hero_basic");
loadTextures({
    "head": "suhp:garnet/garnet_head_texture",
    "l_arm": "suhp:garnet/garnet_left_arm_texture",
    "l_leg": "suhp:garnet/garnet_left_leg_texture",
    "r_arm": "suhp:garnet/garnet_right_arm_texture",
    "r_leg": "suhp:garnet/garnet_right_leg_texture",
    "body": "suhp:garnet/garnet_body_texture",
    "gem": "suhp:gem",
    "gauntlet": "suhp:garnet/garnet_gauntlet"
});

var utils = implement("fiskheroes:external/utils");
var garnet = implement("suhp:external/garnet_models");

var lines_garnet;

function init(renderer) {
    parent.init(renderer);

    renderer.setTexture((entity, renderLayer) => renderLayer == "CHESTPLATE" ? "gem" : null)

    renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "rightLeg", "leftLeg");
    renderer.fixHatLayer("CHESTPLATE");
}

function initEffects(renderer) {
    utils.setOpacity(renderer, 0.99, 1.0);
    garnet.initModels(renderer);
    /*
        var color = 0xD823BA;
        var beam = renderer.createResource("BEAM_RENDERER", "dhhp:water_beam");

        lines_garnet = utils.createLines(renderer, beam, color, [
            { "start": [0.1, 0.1, 0.1], "end": [0.4, 0.7, 0.5], "size": [4.0, 4.0] },
        ]);

        lines_garnet.anchor.set("rightArm");
        lines_garnet.setOffset(0.0, 0, 5).setRotation(0, 0, 0).setScale(9.0);
        //lines_garnet.mirror = true;
        */
}

function initAnimations(renderer) {
    parent.initAnimations(renderer);

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
}

function render(entity, renderLayer, isFirstPersonArm) {
    /* lines_garnet.progress = lines_garnet.opacity = entity.getInterpolatedData("suhp:dyn/gauntlet_timer");
     lines_garnet.render();
     */

    garnet.render(entity, renderLayer, isFirstPersonArm);
}

/*toDo 
anims
shape rendering with beam render for summon gauntlet anim
change extend to fiskheroes directory when i can
first person render for hand
optimize file
*/