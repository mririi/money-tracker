package com.moneyTracker.services;

import com.moneyTracker.entities.TransactionEntity;
import com.moneyTracker.repositories.TransactionJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class TransactionService {
    private final TransactionJpaRepository transactionJpaRepository;

    public TransactionEntity createTransaction(TransactionEntity transactionEntity) {
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
