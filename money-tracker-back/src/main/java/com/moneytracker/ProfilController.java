package com.moneytracker;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/profils")
public class ProfilController {

    private final ProfilService profilService;

    public ProfilController(ProfilService profilService) {
        this.profilService = profilService;
    }

    @GetMapping("/{id}")
    public ProfilEntity getProfilById(@PathVariable("id") final int id) {
        return profilService.getProfilById(id);
    }

    @PostMapping
    public ProfilEntity createProfil(@RequestBody ProfilEntity profil) {
        return profilService.createProfil(profil);
    }

}
