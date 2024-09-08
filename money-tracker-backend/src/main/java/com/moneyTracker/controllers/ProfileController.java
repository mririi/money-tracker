package com.moneyTracker.controllers;

import com.moneyTracker.entities.ProfileEntity;
import com.moneyTracker.services.ProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/profiles")
@RequiredArgsConstructor
public class ProfileController {

    private final ProfileService profileService;

    @GetMapping("/profile")
    public ProfileEntity getProfilByUserToken(@RequestParam("token") final String token) {
        return profileService.getProfileByUserToken(token);
    }

    @PutMapping("/{id}/balance")
    public void updateProfileBalance(@PathVariable("id") final int profileId, @RequestParam("balance") final Long balance) {
        profileService.updateProfileBalance(profileId, balance);
    }

    @GetMapping("/{id}/balance")
    public Long getProfileBalance(@PathVariable("id") final int id) {
        ProfileEntity profile = profileService.getProfileById(id);
        return profile != null ? profile.getBalance() : 0L;
    }
}
