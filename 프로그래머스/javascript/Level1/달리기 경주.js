function solution(players, callings) {
    let playerMap = new Map();

    players.forEach((item, idx) => {
        playerMap.set(item, idx);
    });

    callings.forEach((item) => {
        let currentRank = playerMap.get(item);

        if (currentRank === 0) return;

        let beforeRank = currentRank - 1;
        let beforeName = players[beforeRank];

        // 순위 교체
        [players[currentRank], players[beforeRank]] = [players[beforeRank], players[currentRank]];

        // 맵 업데이트
        playerMap.set(item, beforeRank);
        playerMap.set(beforeName, currentRank);
    });

    return players;
}
