package com.s10p31a709.game.logelk;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AttackedObject {

    private Double[] position;
    private int selectedIndex;

}