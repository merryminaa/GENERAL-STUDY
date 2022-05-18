function solution(participant, completion) {
    let answer = '';
    
    //중복을 포합한 합집합에서 개수가 홀수인 항목만 추출 
    const unionAll = participant.concat(completion);
    const count = unionAll.reduce((accu, curr) => {
        accu[curr] = (accu[curr] || 0) +1;
        return accu;
    }, {}); 
    
    Object.keys(count).find(key => {
        if (count[key] % 2 == 1) {
            answer = key;
        }
    });
    return answer;
}
