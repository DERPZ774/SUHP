var head;
var body;
var l_arm;
var r_arm;


var l_leg;
var r_leg;

function initModels(renderer) {

    //Models
    var model_head = renderer.createResource("MODEL", "suhp:garnet_head");

    model_head.texture.set("head");
    head = renderer.createEffect("fiskheroes:model").setModel(model_head);
    head.anchor.set("head");

    var model_l_arm = renderer.createResource("MODEL", "suhp:garnet_left_arm");

    model_l_arm.texture.set("l_arm");
    l_arm = renderer.createEffect("fiskheroes:model").setModel(model_l_arm);
    l_arm.anchor.set("leftArm");

    var model_r_arm = renderer.createResource("MODEL", "suhp:garnet_right_arm");

    model_r_arm.texture.set("r_arm");
    r_arm = renderer.createEffect("fiskheroes:model").setModel(model_r_arm);
    r_arm.anchor.set("rightArm");

    var model_l_leg = renderer.createResource("MODEL", "suhp:garnet_left_leg");

    model_l_leg.texture.set("l_leg");
    l_leg = renderer.createEffect("fiskheroes:model").setModel(model_l_leg);
    l_leg.anchor.set("leftLeg");

    var model_r_leg = renderer.createResource("MODEL", "suhp:garnet_right_leg");

    model_r_leg.texture.set("r_leg");
    r_leg = renderer.createEffect("fiskheroes:model").setModel(model_r_leg);
    r_leg.anchor.set("rightLeg");

    var model_body = renderer.createResource("MODEL", "suhp:garnet_body");

    model_body.texture.set("body");
    body = renderer.createEffect("fiskheroes:model").setModel(model_body);
    body.anchor.set("body");

    var model_l_gauntlet = renderer.createResource("MODEL", "suhp:garnet_gauntlet_left");

    model_l_gauntlet.texture.set("gauntlet");
    l_gauntlet = renderer.createEffect("fiskheroes:model").setModel(model_l_gauntlet);
    l_gauntlet.anchor.set("leftArm");

    var model_r_gauntlet = renderer.createResource("MODEL", "suhp:garnet_gauntlet_right");

    model_r_gauntlet.texture.set("gauntlet");
    r_gauntlet = renderer.createEffect("fiskheroes:model").setModel(model_r_gauntlet);
    r_gauntlet.anchor.set("rightArm");
}

function render(entity, renderLayer, isFirstPersonArm) {

    r_arm.render();

    if (!isFirstPersonArm && renderLayer == "CHESTPLATE") {
        head.render();

        body.render();

        l_arm.render();


        l_leg.render();

        r_leg.render();
    }
}