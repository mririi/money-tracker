package com.moneyTracker.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TransactionPostDto {
    private Long amount;
    private String category;
    private String type;
    private String date;
    private int profileId;
}
