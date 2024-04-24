package com.s10p31a709.game.api.commandCenter;

import com.s10p31a709.game.api.room.entity.Player;
import com.s10p31a709.game.api.room.entity.Room;
import com.s10p31a709.game.api.room.repository.RoomRepository;
import com.s10p31a709.game.api.socket.model.StompPayload;
import com.s10p31a709.game.api.socket.service.RoomSocketService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class CommandCenter {

    private final RoomRepository roomRepository;
    private final RoomSocketService roomSocketService;

    @Scheduled(fixedRate = 1000)
    public void timeSchedule(){
        List<Room> rooms = roomRepository.findAllRoom();

        for (Room room : rooms){
            if (room.getRoomState() != null && !room.getRoomState().equals(0)) {

                // 시간 1초씩 감소
                room.setRoomTime(room.getRoomTime()-1);

                // 시간이 다되면 다음 상태로 변경후 알림 전송
                if (room.getRoomTime() <= 0){
                    if(room.getRoomState() == 1){
                        roomSocketService.gameStart(room.getRoomId());
                    }else if(room.getRoomState() == 2){
                        roomSocketService.gameFinish(room.getRoomId());
                    }else if(room.getRoomState() == 3){
                        roomSocketService.backRoom(room.getRoomId());
                    }
                    continue;
                }

                // 한쪽팀이 다 죽어서 게임이 끝났는지 확인
                if(room.getRoomState() == 2){
                    int aliveSeeker = 0;
                    int aliveHider = 0;
                    for (Player player : room.getRoomPlayers()){
                        if(!player.getIsDead()){
                            if (player.getIsSeeker()){
                                aliveSeeker++;
                            }else {
                                aliveHider++;
                            }
                        }
                    }
                    if(aliveHider == 0 || aliveSeeker == 0) roomSocketService.gameFinish(room.getRoomId());
                }

            }
        }
    }


//    @Scheduled(fixedRate = 30)
//    public void positionSchedule(){
//        List<Room> rooms = roomRepository.findAllRoom();
//        for (Room room : rooms){
//            if (room.getRoomState() != null && room.getRoomState().equals(2)) {
//                StompPayload<Room> payload = new StompPayload<>("room.players", room.getRoomId(), "system", room);
//                simpMessagingTemplate.convertAndSend("/sub/room/"+room.getRoomId(), payload);
//            }
//        }
//    }

}
