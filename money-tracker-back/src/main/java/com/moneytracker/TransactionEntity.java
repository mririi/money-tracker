package com.moneytracker;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

import javax.persistence.JoinColumn;
import java.util.Objects;

@Entity
public class TransactionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private double amount;
    private String category;
    private String type;
    @ManyToOne
    @JoinColumn(name = "profil_id", referencedColumnName = "id")
    private ProfilEntity profilEntity;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public ProfilEntity getProfilEntity() {
        return profilEntity;
    }

    public void setProfilEntity(ProfilEntity profilEntity) {
        this.profilEntity = profilEntity;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TransactionEntity that)) return false;
        return Double.compare(amount, that.amount) == 0 && Objects.equals(id, that.id) && Objects.equals(name, that.name) && Objects.equals(category, that.category) && Objects.equals(type, that.type) && Objects.equals(profilEntity, that.profilEntity);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, amount, category, type, profilEntity);
    }

    @Override
    public String toString() {
        return "TransactionEntity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", amount=" + amount +
                ", category='" + category + '\'' +
                ", type='" + type + '\'' +
                ", profilEntity=" + profilEntity +
                '}';
    }
}
