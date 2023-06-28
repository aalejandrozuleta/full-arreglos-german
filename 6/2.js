function desgloceADN(ADN) {
    let A = [];
    let T = [];
    let C = [];
    let G = [];

    for (let i = 0; i < ADN.length; i++) {
        for (let j = 0; j < ADN[i].length; j++) {
            if (ADN[i][j]== "A") {
                A+=("A")
            };

            if (ADN[i][j]== "T") {
                T+=("T")
            };
            if (ADN[i][j]== "C") {
                C+=("C")
            };
            if (ADN[i][j]== "G") {
                G+=("G")
            };
        }
    }
    console.log([A, T, C, G]);
    }
desgloceADN(["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"])