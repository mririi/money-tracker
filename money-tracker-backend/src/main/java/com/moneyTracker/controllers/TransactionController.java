package com.moneyTracker.controllers;

import com.moneyTracker.entities.TransactionEntity;
import com.moneyTracker.services.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/api/v1/transactions")
@RequiredArgsConstructor
public class TransactionController {
    private final TransactionService transactionService;

    @GetMapping("/profile/{id}")
    public Set<TransactionEntity> getAllTransactionsByProfileId(@PathVariable("id") final int id) {
        return transactionService.getTransactionsByProfileId(id);
    }

    @PostMapping
    public TransactionEntity createTransaction(@RequestBody TransactionEntity transactionEntity) {
        return transactionService.createTransaction(transactionEntity);
    }

    @GetMapping("/profile/{id}/total-amount")
    public long getTotalAmount(@PathVariable("id") final int id, @RequestParam("type") final String type) {
        return transactionService.getTotalAmount(id, type);
    }

    @DeleteMapping("/{id}")
    public void deleteTransaction(@PathVariable("id") final Long id) {
        transactionService.deleteTransaction(id);
    }

    @GetMapping("/{id}")
    public TransactionEntity getTransaction(@PathVariable("id") final Long id) {
        return transactionService.getTransaction(id);
    }
}
