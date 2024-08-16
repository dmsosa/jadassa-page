export function secondsToString(time)  {
    const minuten = Math.floor(time / 60);
    const sekunden = Math.floor(time % 60);
    const stringSekunden = time < 10 ? `0${sekunden}` : sekunden;

    return `${(minuten)}:${stringSekunden}`;
}

//Zeit in sekunden erhalten
//zeit / 60 = Minuten
//zeit % 60 = Sekunden
//wenn sekunden weniger als 10 ist, geben sie 0+zeit ein

export function stringToSeconds(string)  {
    const list = string.split(":");
    const minuten = Number(list[0]);
    const sekunden = Number(list[1]);

    return (minuten * 60) + sekunden ;
}

//String bei : splitten
// index [1] sind die Sekunden
// index [0] sind die Minuten
//Minuten * 60 = Sekunden
//Return totalSekunden