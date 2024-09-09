package com.moneyTracker.services;

import com.moneyTracker.dtos.TransactionPostDto;
import com.moneyTracker.entities.ProfileEntity;
import com.moneyTracker.entities.TransactionEntity;
import com.moneyTracker.repositories.TransactionJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class TransactionService {
    private final TransactionJpaRepository transactionJpaRepository;

    public TransactionEntity createTransaction(TransactionPostDto transactionPostDto) {
        ProfileEntity profileEntity = ProfileEntity.builder().id(transactionPostDto.getProfileId()).build();
        TransactionEntity transactionEntity = TransactionEntity.builder()
                .amount(transactionPostDto.getAmount())
                .category(transactionPostDto.getCategory())
                .type(transactionPostDto.getType())
                .date(LocalDateTime.parse(transactionPostDto.getDate()))
                .profileEntity(profileEntity).build();
        return transactionJpaRepository.save(transactionEntity);
    }

    public TransactionEntity getTransaction(Long id) {
        return transactionJpaRepository.findById(id).orElseThrow(() -> new RuntimeException("Transaction not found"));
    }

    public void deleteTransaction(Long id) {
        transactionJpaRepository.deleteById(id);
    }

    public Set<TransactionEntity> getTransactionsByProfileId(int profileId) {
        return new HashSet<>(transactionJpaRepository.findByProfileEntityId(profileId));
    }

    public long getTotalAmount(int id, String type) {
        Long totalAmount = transactionJpaRepository.sumAmountByProfileEntityIdAndType(id, type);
        return totalAmount != null ? totalAmount : 0L ;
    }

}
