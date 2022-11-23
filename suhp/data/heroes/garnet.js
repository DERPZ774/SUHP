function init(hero) {
    hero.setName("Garnet");
    hero.setTier(8);

    hero.setChestplate("Gem");

    hero.addPowers("suhp:garnet");

    hero.addAttribute("FALL_RESISTANCE", 1.0, 1);
    hero.addAttribute("JUMP_HEIGHT", 4.0, 0);
    hero.addAttribute("PUNCH_DAMAGE", 10.0, 0);
    hero.addAttribute("SPRINT_SPEED", 1.0, 1);

    hero.addKeyBind("GAUNTLET", "Toggle Gauntlet", 1);

    hero.setDefaultScale(0.9);
    hero.setHasProperty(hasProperty);
}

function hasProperty(entity, property) {
    return property == "BREATHE_SPACE";
}
/*todo healing factor when poofed
beam dmg + balancing
if extra keybinds add geokinesis
add transformation when gauntlet done
test
*/