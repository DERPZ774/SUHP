function init(hero) {
    hero.setName("Garnet");
    hero.setTier(8);

    hero.setHelmet("Head");
    hero.setChestplate("Shirt");
    hero.setLeggings("Pants");
    hero.setBoots("Shoes");

    hero.addPowers("suhp:garnet");

    hero.addAttribute("FALL_RESISTANCE", 1.0, 1);
    hero.addAttribute("JUMP_HEIGHT", 4.0, 0);
    hero.addAttribute("PUNCH_DAMAGE", 10.0, 0);
    hero.addAttribute("SPRINT_SPEED", 1.0, 1);

    hero.addKeyBind("GAUNTLET", "Toggle Gauntlet", 1);

    hero.setDefaultScale(1.0);
    hero.setHasProperty(hasProperty);
}

function hasProperty(entity, property) {
    return property == "BREATHE_SPACE";
}