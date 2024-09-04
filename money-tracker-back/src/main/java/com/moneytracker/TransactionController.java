package com.moneytracker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/transactions")
public class TransactionController {
    @Autowired
    private TransactionService transactionService;

    @GetMapping
    public Set<TransactionEntity> getAllTransactions() {
        return transactionService.getTransactions();
    }

    @PostMapping
    public TransactionEntity createTransaction(@RequestBody TransactionEntity transactionEntity) {
        return transactionService.createTransaction(transactionEntity);
    }
}
