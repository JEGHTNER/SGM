package com.s10p31a709.game.api.socket.service;

import com.s10p31a709.game.api.room.entity.Player;
import com.s10p31a709.game.common.config.GameProperties;
import com.s10p31a709.game.logelk.entity.HideLocation;
import com.s10p31a709.game.logelk.service.HideLocationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class AIService {

    private final GameProperties gameProperties;
    private final HideLocationService hideLocationService;

    public List<Player> createComputer(int n){
        List<Player> list = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            Player player = new Player();
            player.setSelectedIndex(new Random().nextInt(gameProperties.getObject().getMaxHiderIdx()));
            player.setNickname("Computer_"+new Random().nextInt(100000));
            player.setPosition(new Double[]{i*1d, i*1d, i*1d});
            player.setDirection(new Double[]{i*1d, i*1d, i*1d});
            player.setIsDead(false);
            player.setIsSeeker(false);
        }
        return list;
    }

    public List<Player> hideLocationComputer(int n, String map){
        List<HideLocation> hideLocations = hideLocationService.findN(n, map);

        List<Player> list = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            HideLocation hideLocation = hideLocations.get(i);
            Player player = new Player();
            player.setSelectedIndex(hideLocation.getSelectedIndex());
            player.setNickname("Computer_"+new Random().nextInt(100000));
            player.setPosition(hideLocation.getPosition());
            player.setDirection(hideLocation.getDirection());
            player.setIsDead(false);
            player.setIsSeeker(false);
            list.add(player);
        }
        return list;
    }

}