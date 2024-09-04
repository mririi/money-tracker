package com.moneytracker;

import org.springframework.stereotype.Service;

@Service
public class ProfilService {
    private final ProfilJpaRepository profilJpaRepository;

    public ProfilService(ProfilJpaRepository profilJpaRepository) {
        this.profilJpaRepository = profilJpaRepository;
    }

    public ProfilEntity getProfilById(int id) {
        return profilJpaRepository.findById(id).orElse(null);
    }

    public ProfilEntity createProfil(ProfilEntity profilEntity) {
        return profilJpaRepository.save(profilEntity);
    }

    public ProfilEntity updateProfil(ProfilEntity profilEntity) {
        return profilJpaRepository.save(profilEntity);
    }

    public void deleteProfil(int id) {
        profilJpaRepository.deleteById(id);
    }
}
