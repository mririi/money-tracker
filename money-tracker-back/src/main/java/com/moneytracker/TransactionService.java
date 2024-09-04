package com.moneytracker;

import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class TransactionService {
    private final TransactionJpaRepository transactionJpaRepository;

    public TransactionService(TransactionJpaRepository transactionJpaRepository) {
        this.transactionJpaRepository = transactionJpaRepository;
    }

    public TransactionEntity createTransaction(TransactionEntity transactionEntity) {
        return transactionJpaRepository.save(transactionEntity);
    }

    public TransactionEntity getTransaction(Long id) {
        return transactionJpaRepository.findById(id).orElseThrow(() -> new RuntimeException("Transaction not found"));
    }

    public void deleteTransaction(Long id) {
        transactionJpaRepository.deleteById(id);
    }

    public Set<TransactionEntity> getTransactions() {
        return new HashSet<>(transactionJpaRepository.findAll());
    }

}
