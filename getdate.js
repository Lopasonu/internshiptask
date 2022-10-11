function f1(D) {
    let D2 = { 'Mon': 0, 'Tue': 0, 'Wed': 0, 'Thu': 0, 'Fri': 0, 'Sat': 0, 'Sun': 0 }
    let check = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
    for (const key of Object.keys(D)) {
        let str = key
        let val = D[key]
        const d = new Date(str)
        const day = d.getDay()
        if (day == 0) {
            D2["Sun"] += val
            check[6] = 1
        }
        if (day > 0) {
            D2[Object.keys(D2)[day - 1]] += val
            check[parseInt(Object.keys(check)[day - 1])] = 1
        }
    }
    if (check[1] == 0) {
        D2["Tue"] = parseInt((D2["Mon"] * 2) - D2["Sun"])
    }
    for (let i = 2; i <= 5; i++) {
        if (check[i] == 0) {
            D2[Object.keys(D2)[i]] = parseInt((D2[Object.keys(D2)[i - 1]] * 2) - D2[Object.keys(D2)[i - 2]])
        }
    }
    return D2
}

